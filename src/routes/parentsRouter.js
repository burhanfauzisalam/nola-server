import express from "express";
import * as parent from "../controllers/parents/index.js";
import adminAuth from "../middlewares/adminMiddleware.js";

const router = express.Router();

router.get("/parents", adminAuth, parent.allParents);

export default router;
