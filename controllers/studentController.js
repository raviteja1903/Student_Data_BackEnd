// import Student from "../models/Student.js";
// import bcrypt from "bcryptjs";

// // Register new student
// export const registerStudent = async (req, res) => {
//   try {
//     const { studentId, name, course, email, password } = req.body;

//     const existing = await Student.findOne({ email });
//     if (existing) return res.status(400).json({ error: "Email already exists" });

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const student = new Student({
//       studentId,
//       name,
//       course,
//       email,
//       password: hashedPassword
//     });

//     await student.save();
//     res.json({ message: "✅ Student registered successfully!" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // Login student
// export const loginStudent = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const student = await Student.findOne({ email });
//     if (!student) return res.status(401).json({ error: "User not found" });

//     const isMatch = await bcrypt.compare(password, student.password);
//     if (!isMatch) return res.status(401).json({ error: "Invalid password" });

//     res.json({
//       studentId: student.studentId,
//       name: student.name,
//       email: student.email,
//       course: student.course
//     });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // Get all students
// export const getStudents = async (req, res) => {
//   try {
//     const students = await Student.find();
//     res.json(students);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };
import Student from "../models/Student.js";
import bcrypt from "bcryptjs";

// Register
export const registerStudent = async (req, res) => {
  try {
    const { studentId, name, course, email, password } = req.body;

    const existing = await Student.findOne({ email });
    if (existing) return res.status(400).json({ error: "Email already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const student = new Student({ studentId, name, course, email, password: hashedPassword });
    await student.save();
    res.json({ message: "✅ Student registered successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Login
export const loginStudent = async (req, res) => {
  try {
    const { email, password } = req.body;

    const student = await Student.findOne({ email });
    if (!student) return res.status(401).json({ error: "User not found" });

    const isMatch = await bcrypt.compare(password, student.password);
    if (!isMatch) return res.status(401).json({ error: "Invalid password" });

    res.json({
      studentId: student.studentId,
      name: student.name,
      email: student.email,
      course: student.course
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all students
export const getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
