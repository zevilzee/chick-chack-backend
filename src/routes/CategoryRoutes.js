import express from "express";
import {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategoryById,
  deleteCategoryById,
} from "../controllers/CategoryController.js";
import authMiddleware from "../middlewares/JwtAuth.js";
import upload from "../middlewares/upload.js";

const router = express.Router();

router.post(
  "/categories",
  authMiddleware,
  upload.single("categoryPhoto"),
  createCategory
);
router.get("/categories", authMiddleware, getAllCategories);
router.get("/categories/:id", authMiddleware, getCategoryById);
router.put(
  "/categories/:id",
  authMiddleware,
  upload.single("categoryPhoto"),
  updateCategoryById
);
router.delete("/categories/:id", authMiddleware, deleteCategoryById);

export default router;
