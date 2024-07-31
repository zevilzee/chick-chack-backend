import express from "express";
import {
  createShop,
  getAllShops,
  getShopById,
  updateShopById,
  deleteShopById,
  getShopByCategory,
  getShopByCity,
  getShopByOwnerId,
} from "../controllers/ShopController.js";
import authMiddleware from "../middlewares/JwtAuth.js";
import upload from "../middlewares/upload.js";
const router = express.Router();

router.post(
  "/shops",
  upload.fields([
    { name: "headerBackground", maxCount: 1 },
    { name: "icon", maxCount: 1 },
  ]),
  authMiddleware,
  createShop
);
router.get("/shops", authMiddleware, getAllShops);
router.get("/shops/:id", authMiddleware, getShopById);
router.put(
  "/shops/:id",
  authMiddleware,
  upload.fields([
    { name: "headerBackground", maxCount: 1 },
    { name: "icon", maxCount: 1 },
  ]),
  updateShopById
);
router.delete("/shops/:id", authMiddleware, deleteShopById);
router.get("/shops/category/:id", authMiddleware, getShopByCategory);
router.get("/shops/city/:id", authMiddleware, getShopByCity);
router.get("/shops/owner/:id", authMiddleware, getShopByOwnerId);

export default router;
