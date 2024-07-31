import express from "express";
import {
  createItem,
  getAllItems,
  getItemById,
  updateItemById,
  deleteItemById,
} from "../controllers/ShopItemController.js";
import authMiddleware from "../middlewares/JwtAuth.js";
import upload from "../middlewares/upload.js";

const router = express.Router();

router.post(
  "/items",
  authMiddleware,
  upload.single("additionPhoto"),
  createItem
);
router.get("/items", authMiddleware, getAllItems);
router.get("/items/:id", authMiddleware, getItemById);
router.put(
  "/items/:id",
  authMiddleware,
  upload.single("additionPhoto"),
  updateItemById
);
router.delete("/items/:id", authMiddleware, deleteItemById);

export default router;
