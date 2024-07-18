import bcrypt from "bcrypt";
import adminModel from "../../models/adminModel.js";

const addAdmin = async (req, res) => {
  try {
    const { username, password, name, role } = req.body;
    if (!username || !password || !name || !role) {
      return res.status(400).json({
        status: req.status,
        message: "Please input required fields.",
      });
    }
    const cekAdmin = await adminModel.findOne({ username });
    if (cekAdmin) {
      return res.status(400).json({
        status: req.status,
        message: "Username already exist. Please use another username",
      });
    }
    const salt = await bcrypt.genSalt(10);
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, salt);

    const newAdmin = new adminModel({
      username,
      password: hashedPassword,
      name,
      role,
    });
    await newAdmin.save();
    res.status(201).json({
      status: res.status,
      message: "Admin added.",
      data: newAdmin,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error...", error });
  }
};

export default addAdmin;
