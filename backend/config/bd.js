// Databse Connection Configuration
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const MONGO_URI = process.env.MONGO_URI;

export default async function connectDB() {
  if (!MONGO_URI) {
    throw new Error("MONGO_URI is not defined in the environment variables");
  }
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  }
}
