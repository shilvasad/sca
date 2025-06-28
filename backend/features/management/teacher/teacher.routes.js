/*
- Add a new teacher
- Get all teachers
- Get a teacher by ID
- Update a teacher by ID
- Delete a teacher by ID

*/

import express from "express";
import {
  addTeacher,
  getAllTeachers,
  getTeacherById,
  updateTeacherById,
  deleteTeacherById,
  
} from "./teacher.controller.js";


const router = express.Router();

// RESTful teacher management endpoints
router.post("/", addTeacher); // Create
router.get("/", getAllTeachers); // Read all
router.get("/:id", getTeacherById); // Read one
router.put("/:id", updateTeacherById); // Update
router.delete("/:id", deleteTeacherById); // Delete

export default router;
