import express from "express";
import {
  createAppInfo,
  getAppInfo,
  getAppInfoById,
  updateAppInfo,
  deleteAppInfo // Import the delete function
} from "../controllers/AppController.js";

const router = express.Router();

router.post("/", createAppInfo);
router.get("/", getAppInfo);
router.get("/:id", getAppInfoById);
router.put("/:id", updateAppInfo);
router.delete("/:id", deleteAppInfo); // Add DELETE route

export default router;
