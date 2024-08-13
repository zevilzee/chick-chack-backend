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

router.post("/items", upload.single("itemPhoto"), createItem);
router.get("/items", getAllItems);
router.get("/items/:id", getItemById);
router.put(
  "/items/:id",

  upload.single("itemPhoto"),
  updateItemById
);
router.delete("/items/:id", deleteItemById);

export default router;
