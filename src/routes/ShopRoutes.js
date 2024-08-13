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
  getShopMenuByShopId
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

  createShop
);
router.get("/shops", getAllShops);
router.get("/shops/:id", getShopById);
router.put(
  "/shops/:id",

  upload.fields([
    { name: "headerBackground", maxCount: 1 },
    { name: "icon", maxCount: 1 },
  ]),
  updateShopById
);
router.delete("/shops/:id", deleteShopById);
router.get("/shops/category/:id", getShopByCategory);
router.get("/shops/city/:id", getShopByCity);
router.get("/shops/owner/:id", getShopByOwnerId);
router.get("/shops/items/:id", getShopMenuByShopId);

export default router;
