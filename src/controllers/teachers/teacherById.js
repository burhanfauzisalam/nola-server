import teachersModel from "../../models/teachersModel.js";

const teacherById = async (req, res) => {
  try {
    const username = req.params.username;
    const data = await teachersModel
      .findOne({ username })
      .select("-password, -_id");
    if (!data) {
      return res.status(400).json({ message: "teacher not found..." });
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Server error...", error });
  }
};

export default teacherById;
