import express from "express";

const router = express.Router();

// Student management API test endpoint
router.get("/", (req, res) => {
  res.status(200).send("Student Management API");
});

export default router;