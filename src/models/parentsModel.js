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

const ortuSchema = new Schema({
  name: {
    type: String,
    default: "",
  },
  pendidikan: {
    type: String,
    default: "",
  },
  pekerjaan: {
    type: String,
    default: "",
  },
  penghasilan: {
    type: Number,
    default: 0,
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

const parentSchema = new Schema({
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
  domisili: {
    type: addressSchema,
    default: () => ({}),
  },
  alamat_kk: {
    type: addressSchema,
    default: () => ({}),
  },
  ayah: {
    type: ortuSchema,
    default: () => ({}),
  },
  ibu: {
    type: ortuSchema,
    default: () => ({}),
  },
});

export default model("Parent", parentSchema);
