import Teacher from "../../features/management/teacher/teacher.model.js";
import jwt from "jsonwebtoken";

/**
 * Generate JWT token for authentication
 * @param {string} id - Teacher ID
 * @param {string} role - Teacher role
 * @returns {string} JWT token
 */
const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

/**
 * Login Teacher
 */
export async function loginTeacher(req, res) {
  const { email, password } = req.body;
  try {
    const teacher = await Teacher.findOne({ email });
    if (!teacher) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    const isPasswordValid = await teacher.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    const token = generateToken(teacher._id, teacher.role);
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: parseInt(process.env.JWT_EXPIRES_IN, 10) || 3600000,
      sameSite: "Lax",
    });
    return res.json({
      _id: teacher._id,
      name: teacher.name,
      email: teacher.email,
      role: teacher.role,
      token,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error during login" });
  }
}

/**
 * Logout Teacher
 */
export async function logoutTeacher(req, res) {
  res.cookie("token", "", {
    httpOnly: true,
    expires: new Date(0),
    sameSite: "Lax",
    secure: process.env.NODE_ENV === "production",
  });
  return res.status(200).json({ message: "Logout successful" });
}
