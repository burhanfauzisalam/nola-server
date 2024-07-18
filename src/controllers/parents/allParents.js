import parentsModel from "../../models/parentsModel.js";

const allParents = async (req, res) => {
  try {
    const data = await parentsModel.find();
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ message: "Server error...", error });
  }
};

export default allParents;
