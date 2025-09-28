// // import express from "express";
// // import mongoose from "mongoose";
// // import cors from "cors";
// // import dotenv from "dotenv";
// // import studentRoutes from "./routes/studentRoutes.js";

// // dotenv.config();
// // const app = express();

// // // Middleware
// // app.use(cors());
// // app.use(express.json());

// // // Routes
// // app.use("/api/students", studentRoutes);

// // // MongoDB connection
// // mongoose.connect(process.env.MONGO_URI)
// //   .then(() => console.log("✅ MongoDB connected"))
// //   .catch((err) => console.error("❌ MongoDB connection error:", err));

// // // Start server
// // const PORT = process.env.PORT || 5000;
// // app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import dotenv from "dotenv";
// import studentRoutes from "./routes/studentRoutes.js";

// dotenv.config();
// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use("/api/students", studentRoutes);

// // MongoDB connection
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log("✅ MongoDB Atlas connected"))
//   .catch((err) => console.error("❌ MongoDB connection error:", err));

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

import connectDB from "./db.js";

connectDB();
