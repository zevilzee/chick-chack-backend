import express from "express";
import {
  createCity,
  getAllCities,
  getCityById,
  updateCityById,
  deleteCityById,
} from "../controllers/CityController.js";
import authMiddleware from "../middlewares/JwtAuth.js";

const router = express.Router();

router.post("/cities", authMiddleware, createCity);
router.get("/cities", authMiddleware, getAllCities);
router.get("/cities/:id", authMiddleware, getCityById);
router.put("/cities/:id", authMiddleware, updateCityById);
router.delete("/cities/:id", authMiddleware, deleteCityById);

export default router;
