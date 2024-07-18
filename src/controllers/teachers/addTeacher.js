import bcrypt from "bcrypt";
import teachersModel from "../../models/teachersModel.js";

const addTeacher = async (req, res) => {
  try {
    const { username, password, name, role } = req.body;
    if (!username || !password || !name || !role) {
      return res.status(400).json({
        status: req.status,
        message: "Please input required fields.",
      });
    }
    const cekTeacher = await teachersModel.findOne({ username });
    if (cekTeacher) {
      return res.status(400).json({
        status: req.status,
        message: "Username already exist. Please use another username",
      });
    }
    const salt = await bcrypt.genSalt(10);
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, salt);

    const newTeacher = new teachersModel({
      username,
      password: hashedPassword,
      name,
      role,
    });
    await newTeacher.save();
    res.status(201).json({
      status: res.status,
      message: "Teacher added.",
      data: newTeacher,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error...", error });
  }
};

export default addTeacher;
