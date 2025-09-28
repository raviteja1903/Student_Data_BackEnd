// import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import studentRoutes from "./routes/studentRoutes.js";
import connectDB from "./db.js";

dotenv.config();
const app = express();

// Connect MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/students", studentRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
