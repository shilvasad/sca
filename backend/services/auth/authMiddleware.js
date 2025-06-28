import jwt from "jsonwebtoken";
import Teacher from "../../features/management/teacher/teacher.model.js";

/**
 * Middleware to protect routes (JWT authentication)
 */
export async function protect(req, res, next) {
  let token;
  if (req.cookies && req.cookies.token) {
    token = req.cookies.token;
  } else if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (!token) {
    return res.status(401).json({ message: "Not authorized, no token" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.teacher = await Teacher.findById(decoded.id).select("-password");
    if (!req.teacher) {
      return res
        .status(401)
        .json({ message: "Not authorized, teacher not found" });
    }
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: "Not authorized, token failed" });
  }
}

/**
 * Middleware to authorize roles
 * @param  {...string} roles
 */
export function authorizedRoles(...roles) {
  return (req, res, next) => {
    if (!req.teacher || !roles.includes(req.teacher.role)) {
      return res.status(403).json({
        message: `User role ${
          req.teacher ? req.teacher.role : "unauthorized"
        } is not authorized to access this route.`,
      });
    }
    next();
  };
}
