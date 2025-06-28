import express from "express";
import teachersRoute from "../features/management/teacher/teacher.routes.js";
import { getTeacherProfile } from "../features/profiles/teacher/teacher.controller.js";
import { authorizedRoles, protect } from "../services/auth/authMiddleware.js";

const router = express.Router();

// Teacher management routes
router.use("/manage/teachers", teachersRoute);
// Teacher profile route (fixed path and roles)
router.get(
  "/profile",
  protect,
  authorizedRoles("teacher", "admin"),
  getTeacherProfile
);

export default router;