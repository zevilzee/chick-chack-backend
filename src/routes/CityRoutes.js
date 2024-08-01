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

router.post("/cities", createCity);
router.get("/cities", getAllCities);
router.get("/cities/:id", getCityById);
router.put("/cities/:id", updateCityById);
router.delete("/cities/:id", deleteCityById);

export default router;
