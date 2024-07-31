import express from "express";
import {
  createAppointment,
  getAllAppointments,
  getAppointmentById,
  updateAppointmentById,
  deleteAppointmentById,
  getAppointmentByShopId,
} from "../controllers/AppointmentController.js";
import authMiddleware from "../middlewares/JwtAuth.js";

const router = express.Router();

router.post("/appointments", authMiddleware, createAppointment);
router.get("/appointments", authMiddleware, getAllAppointments);
router.get("/appointments/:id", authMiddleware, getAppointmentById);
router.put("/appointments/:id", authMiddleware, updateAppointmentById);
router.delete("/appointments/:id", authMiddleware, deleteAppointmentById);
router.get("/appointments/shop/:id", authMiddleware, getAppointmentByShopId);

export default router;
