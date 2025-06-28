import express from "express";
import { loginTeacher, logoutTeacher } from "./authController.js";
import { protect } from "./authMiddleware.js";

const router = express.Router();

// Auth routes for teacher
router.post("/teacher/login", loginTeacher);
router.get("/teacher/logout", protect, logoutTeacher);

export default router;