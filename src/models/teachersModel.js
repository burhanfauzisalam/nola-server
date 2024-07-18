import { Schema, model } from "mongoose";

const addressSchema = new Schema({
  jalan: {
    type: String,
    default: "",
  },
  rt: {
    type: Number,
    default: 0,
  },
  rw: {
    type: Number,
    default: 0,
  },
  kelurahan: {
    type: String,
    default: "",
  },
  kecamatan: {
    type: String,
    default: "",
  },
});

const teacherSchema = new Schema({
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
  domisili: {
    type: addressSchema,
    default: () => ({}), // Set default as a function returning a new object
  },
  alamat_kk: {
    type: addressSchema,
    default: () => ({}), // Set default as a function returning a new object
  },
});

export default model("Teacher", teacherSchema);
