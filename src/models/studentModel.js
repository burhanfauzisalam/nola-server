import { Schema, model } from "mongoose";

const studentSchema = new Schema({
  parentID: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  username: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  role: {
    type: String,
    require: true,
  },
  whatsapp: {
    type: Number,
    default: 0,
  },
  email: {
    type: String,
    default: "",
  },
  grade: {
    type: Number,
    default: 0,
  },
  nisn: {
    type: String,
    default: "",
  },
  nis: {
    type: String,
    default: "",
  },
});

export default model("Student", studentSchema);
