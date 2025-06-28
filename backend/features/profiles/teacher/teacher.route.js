import express from "express";
import { getTeacherProfile } from "./teacher.controller.js";
import { protect, authorizedRoles } from "../../../services/auth/authMiddleware.js";

const router = express.Router();

// Teacher profile route
router.get("/profile", protect, authorizedRoles("teacher", "admin"), getTeacherProfile);

export default router;