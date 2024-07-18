import { Schema, model } from "mongoose";

const adminSchema = new Schema({
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
});

export default model("Admin", adminSchema);
