import express from "express";
import {
  createAppInfo,
  getAppInfo,
  updateAppInfo,
} from "../controllers/AppController.js";

const router = express.Router();

router.post("/", createAppInfo);
router.get("/", getAppInfo);
router.put("/:id", updateAppInfo); // Added `:id` for update endpoint

export default router;
