import dotenv from "dotenv";
import express, { json } from "express";
import cors from "cors";
import connectDB from "./src/config/db.js";

import { parent, teacher, admin, student } from "./src/routes/index.js";

dotenv.config();
const port = process.env["PORT"] || 3000;

const app = express();

connectDB();

app.use(cors());
app.use(json());

app.use("/api", parent);
app.use("/api", teacher);
app.use("/api", admin);
app.use("/api", student);

app.get("/", (req, res) =>
  res.status(200).json({ message: "Server berjalan..." })
);

app.listen(port, () => {
  console.log(`Server is online on port ${port}`);
});
