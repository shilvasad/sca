// Main API routing entry point for all features (optimized)
import express from "express";
import teacherRoutes from "../features/management/teacher/teacher.routes.js";
import studentRoutes from "../features/management/student/student.router.js";
import authRoutes from "../services/auth/authRoute.js";

const router = express.Router();

// RESTful, feature-based route mounting for clean accessibility
router.use("/teachers", teacherRoutes); // e.g., /teachers/*
router.use("/students", studentRoutes); // e.g., /students/*
router.use("/auth", authRoutes);        // e.g., /auth/*

// Add more feature routes here as your app grows

export default router;
