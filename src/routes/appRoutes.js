import express from "express";
import {
  createAppInfo,
  getAppInfo,
  updateAppInfo,
  deleteAppInfo // Import the delete function
} from "../controllers/AppController.js";

const router = express.Router();

router.post("/", createAppInfo);
router.get("/", getAppInfo);
router.put("/:id", updateAppInfo);
router.delete("/:id", deleteAppInfo); // Add DELETE route

export default router;
