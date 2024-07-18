import express from "express";
import * as admin from "../controllers/admin/index.js";

const router = express.Router();

router.post("/admin", admin.addAdmin);
router.post("/admin/login", admin.loginAdmin);

export default router;
