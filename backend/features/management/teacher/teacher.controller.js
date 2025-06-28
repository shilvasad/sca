/*
- Add a new teacher
- Get all teachers
- Get a teacher by ID
- Update a teacher by ID
- Delete a teacher by ID

*/
import Teacher from "./teacher.model.js";

/**
 * Add a new teacher
 */
export async function addTeacher(req, res) {
  try {
    const newTeacher = new Teacher(req.body);
    await newTeacher.save();
    return res.status(201).json({
      message: "Teacher added successfully",
      teacher: {
        _id: newTeacher._id,
        name: newTeacher.name,
        email: newTeacher.email,
        phone: newTeacher.phone,
        role: newTeacher.role,
      },
    });
  } catch (error) {
    let errorMessage = "Error adding teacher";
    let statusCode = 500;
    if (error.name === "ValidationError") {
      statusCode = 400;
      errorMessage = "Invalid data provided: " + error.message;
    } else if (error.code === 11000) {
      statusCode = 400;
      if (error.message.includes("email")) {
        errorMessage = "Teacher with this email already exists";
      } else if (error.message.includes("phone")) {
        errorMessage = "Teacher with this phone number already exists";
      } else {
        errorMessage = "Teacher with this email or phone number already exists";
      }
    } else {
      console.error("Error in addTeacher:", error);
    }
    return res
      .status(statusCode)
      .json({ message: errorMessage, error: error.message });
  }
}

/**
 * Get all teachers
 */
export async function getAllTeachers(req, res) {
  try {
    const teachers = await Teacher.find();
    return res.status(200).json({
      message: "Teachers fetched successfully",
      teachers: teachers.map((teacher) => ({
        _id: teacher._id,
        name: teacher.name,
        email: teacher.email,
        phone: teacher.phone,
        role: teacher.role,
      })),
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error fetching teachers", error: error.message });
  }
}

/**
 * Get a teacher by ID
 */
export async function getTeacherById(req, res) {
  const teacherId = req.params.id;
  try {
    const teacher = await Teacher.findById(teacherId);
    if (!teacher) {
      return res.status(404).json({ message: "Teacher not found" });
    }
    return res.status(200).json({
      _id: teacher._id,
      name: teacher.name,
      email: teacher.email,
      phone: teacher.phone,
      role: teacher.role,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error fetching teacher", error: error.message });
  }
}

/**
 * Update a teacher by ID
 */
export async function updateTeacherById(req, res) {
  const teacherId = req.params.id;
  try {
    const updatedTeacher = await Teacher.findByIdAndUpdate(
      teacherId,
      req.body,
      { new: true }
    );
    if (!updatedTeacher) {
      return res.status(404).json({ message: "Teacher not found" });
    }
    return res.status(200).json({
      message: "Teacher updated successfully",
      teacher: {
        _id: updatedTeacher._id,
        name: updatedTeacher.name,
        email: updatedTeacher.email,
        phone: updatedTeacher.phone,
        role: updatedTeacher.role,
      },
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error updating teacher", error: error.message });
  }
}

/**
 * Delete a teacher by ID
 */
export async function deleteTeacherById(req, res) {
  const teacherId = req.params.id;
  try {
    const deletedTeacher = await Teacher.findByIdAndDelete(teacherId);
    if (!deletedTeacher) {
      return res.status(404).json({ message: "Teacher not found" });
    }
    return res.status(200).json({ message: "Teacher deleted successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error deleting teacher", error: error.message });
  }
}

// Exporting the functions for use in the routes
// This allows the routes to call these functions when the corresponding endpoints are hit.
