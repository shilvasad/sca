import express from "express";
import {
  // addStudent,
  // getAllStudents,
  // getStudentById,
  // updateStudentById,
  // deleteStudentById,
} from "./student.controller.js";

const router = express.Router();

// Student management API test endpoint
router.get("/", (req, res) => {
  res.status(200).send("Student Management API");
});

// TODO: Implement student controller functions and RESTful endpoints
// router.post("/", addStudent);
// router.get("/", getAllStudents);
// router.get(":id", getStudentById);
// router.put(":id", updateStudentById);
// router.delete(":id", deleteStudentById);

export default router;