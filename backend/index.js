import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./config/bd.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

if (!PORT) {
  throw new Error("PORT is not defined in the environment variables");
}

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
      if (process.env.CLIENT_URL && process.env.API_DOCS_URL) {
        console.log(`API Documentation: ${process.env.CLIENT_URL}${process.env.API_DOCS_URL}`);
      }
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
