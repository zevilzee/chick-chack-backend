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

router.post(
  "/cities",
  authMiddleware,
  upload.array("swipperPhoto", 3),
  createCity
);
router.get("/cities", authMiddleware, getAllCities);
router.get("/cities/:id", authMiddleware, getCityById);
router.put(
  "/cities/:id",
  authMiddleware,
  upload.array("swipperPhoto", 3),
  updateCityById
);
router.delete("/cities/:id", authMiddleware, deleteCityById);

export default router;
