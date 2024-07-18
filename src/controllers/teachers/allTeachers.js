import teachersModel from "../../models/teachersModel.js";

const allTeachers = async (req, res) => {
  try {
    const data = await teachersModel.find();
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ message: "Server error...", error });
  }
};

export default allTeachers;
