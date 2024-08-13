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

  upload.single("categoryPhoto"),
  createCategory
);
router.get("/categories", getAllCategories);
router.get("/categories/:id", getCategoryById);
router.put(
  "/categories/:id",

  upload.single("categoryPhoto"),
  updateCategoryById
);
router.delete("/categories/:id", deleteCategoryById);

export default router;
