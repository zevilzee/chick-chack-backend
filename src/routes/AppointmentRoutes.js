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

router.post("/appointments", createAppointment);
router.get("/appointments", getAllAppointments);
router.get("/appointments/:id", getAppointmentById);
router.put("/appointments/:id", updateAppointmentById);
router.delete("/appointments/:id", deleteAppointmentById);
router.get("/appointments/shop/:id", getAppointmentByShopId);

export default router;
