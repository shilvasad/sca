import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./config/bd.js";

dotenv.config();

const PORT = process.env.PORT;

if (!PORT) {
  throw new Error("PORT is not defined in the environment variables");
  process.exit(1);
}
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Server Address: http://localhost:${PORT}`);
        console.log(`API Documentation: ${process.env.CLIENT_URL}${process.env.API_DOCS_URL}`);
});
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer()
