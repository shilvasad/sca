import express from "express";
import { loginTeacher, logoutTeacher } from "./authController.js";

const router = express.Router();

// Auth routes (mounted at /auth)
router.post("/login", loginTeacher);
router.get("/logout", logoutTeacher);

export default router;