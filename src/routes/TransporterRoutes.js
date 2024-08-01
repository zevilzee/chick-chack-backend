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

router.post("/transporters", createTransporter);
router.get("/transporters", getAllTransporters);
router.get("/transporters/:id", getTransporterById);
router.put("/transporters/:id", updateTransporterById);
router.delete("/transporters/:id", deleteTransporterById);

export default router;
