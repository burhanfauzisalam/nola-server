import express from "express";
import * as teacher from "../controllers/teachers/index.js";
import teacherAuth from "../middlewares/teacherMiddleware.js";
import adminAuth from "../middlewares/adminMiddleware.js";

const router = express.Router();

router.post("/teacher", adminAuth, teacher.addTeacher);
router.post("/teacher/login", teacher.loginTeacher);
router.get("/teachers", adminAuth, teacher.allTeachers);
router.get("/teacher", teacherAuth, teacher.detailTeacher);

export default router;
