import teachersRoute from "./teachersRoute.js";
import authRoute from "../services/auth/authRoute.js";
import express from "express";

const router = express.Router();

router.use("/", teachersRoute);
router.use("/", authRoute);

export default router;
