import express from "express";
import { registerStudent, loginStudent, getStudents } from "../controllers/studentController.js";

const router = express.Router();

router.post("/register", registerStudent);
router.post("/login", loginStudent);
router.get("/", getStudents);

export default router;
