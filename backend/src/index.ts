import dotenv from "dotenv";
import app from "./app";
import { connectDB } from "./config/db";
import User from "./models/User";
import Task from "./models/Task";

dotenv.config();

const startServer = async () => {
  await connectDB();

  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
