import bcrypt from "bcrypt";
import parentsModel from "../../models/parentsModel.js";

const addParent = async (req, res) => {
  try {
    const { username, password, role } = req.body;
    if (!username || !password || !role) {
      return res.status(400).json({
        status: req.status,
        message: "Please input required fields.",
      });
    }
    const cekParent = await parentsModel.findOne({ username });
    if (cekParent) {
      return res.status(400).json({
        status: req.status,
        message: "Username already exist. Please use another username",
      });
    }
    const salt = await bcrypt.genSalt(10);
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, salt);

    const newParent = new parentsModel({
      username,
      password: hashedPassword,
      name,
      role,
    });
    await newParent.save();
    res.status(201).json({
      status: res.status,
      message: "Parent added.",
      data: newParent,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error...", error });
  }
};

export default addParent;
