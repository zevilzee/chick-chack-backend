import express from "express";
import {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} from "../controllers/userController.js";
import authMiddleware from "../middlewares/JwtAuth.js";
import upload from "../middlewares/upload.js";
const router = express.Router();

router.post("/users", upload.single("profile"), createUser);
router.get("/users", authMiddleware, getAllUsers);
router.get("/users/:id", authMiddleware, getUserById);
router.put(
  "/users/:id",
  upload.single("profile"),
  authMiddleware,
  updateUserById
);
router.delete("/users/:id", authMiddleware, deleteUserById);

export default router;
