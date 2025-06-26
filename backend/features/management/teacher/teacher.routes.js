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

// Testing route
router.get("/test", (req, res) => {
  res.send("Teachers Management Page.");
});
router.post("/add", addTeacher);
router.get("/all", getAllTeachers);
router.get("/:id", getTeacherById);
router.put("/:id", updateTeacherById);
router.delete("/:id", deleteTeacherById);

export default router;
