import express from "express";
import {
  createTransporter,
  getAllTransporters,
  getTransporterById,
  updateTransporterById,
  deleteTransporterById,
} from "../controllers/TransporterController.js";
import authMiddleware from "../middlewares/JwtAuth.js";

const router = express.Router();

router.post("/transporters", authMiddleware, createTransporter);
router.get("/transporters", authMiddleware, getAllTransporters);
router.get("/transporters/:id", authMiddleware, getTransporterById);
router.put("/transporters/:id", authMiddleware, updateTransporterById);
router.delete("/transporters/:id", authMiddleware, deleteTransporterById);

export default router;
