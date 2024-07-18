import express from "express";
import * as student from "../controllers/student/index.js";
import parentAuth from "../middlewares/parentMiddleware.js";

const router = express.Router();

router.post("/student", parentAuth, student.addStudent);

export default router;
