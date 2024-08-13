import express from "express";
import {
  createCity,
  getAllCities,
  getCityById,
  updateCityById,
  deleteCityById,
} from "../controllers/CityController.js";
import authMiddleware from "../middlewares/JwtAuth.js";
import upload from "../middlewares/upload.js";

const router = express.Router();

router.post("/cities", upload.array("swipperPhoto", 3), createCity);
router.get("/cities", getAllCities);
router.get("/cities/:id", getCityById);
router.put("/cities/:id", upload.array("swipperPhoto", 3), updateCityById);
router.delete("/cities/:id", deleteCityById);

export default router;
