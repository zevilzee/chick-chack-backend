import express from "express";
import {
  createAppointment,
  getAllAppointments,
  getAppointmentById,
  updateAppointmentById,
  deleteAppointmentById,
  getAppointmentByShopId,
  getAppointmentByUserId
} from "../controllers/AppointmentController.js";

const router = express.Router();

router.post("/appointments", createAppointment);
router.get("/appointments", getAllAppointments);
router.get("/appointments/:id", getAppointmentById);
router.put("/appointments/:id", updateAppointmentById);
router.delete("/appointments/:id", deleteAppointmentById);
router.get("/appointments/shop/:id", getAppointmentByShopId);
router.get("/appointments/user/:id", getAppointmentByUserId); 

export default router;
