import express from "express";
import {
    createAppInfo,
    getAppInfo,
    updateAppInfo,
} from "../controllers/userController.js";
import authMiddleware from "../middlewares/JwtAuth.js";

const router = express.Router();

router.post("/", createAppInfo);
router.get("/", getAppInfo);
router.put("/", updateAppInfo);

export default router;
