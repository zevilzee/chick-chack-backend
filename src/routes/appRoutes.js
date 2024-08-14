import express from "express";
import {
    createAppInfo,
    getAppInfo,
    updateAppInfo,
} from "../controllers/userController.js";
import authMiddleware from "../middlewares/JwtAuth.js";

const router = express.Router();

router.post("/App", createAppInfo);
router.get("/App", getAppInfo);
router.put("/App", updateAppInfo);

export default router;
