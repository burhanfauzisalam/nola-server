import bcrypt from "bcrypt";
import studentModel from "../../models/studentModel.js";

const addStudent = async (req, res) => {
  try {
    const parentID = req.parentID;
    const { username, password, name } = req.body;
    if (!username || !password || !name) {
      return res.status(400).json({
        status: req.status,
        message: "Please input required fields.",
      });
    }
    const cekTeacher = await studentModel.findOne({ username });
    if (cekTeacher) {
      return res.status(400).json({
        status: req.status,
        message: "Username already exist. Please use another username",
      });
    }
    const salt = await bcrypt.genSalt(10);
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, salt);

    const newStudent = new studentModel({
      parentID,
      username,
      password: hashedPassword,
      name,
      role: "student",
    });
    await newStudent.save();
    res.status(201).json({
      status: res.status,
      message: "student added.",
      data: newStudent,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error...", error });
  }
};

export default addStudent;
