import express from "express";
import {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  signin,
} from "../controllers/userController.js";
import authMiddleware from "../middlewares/JwtAuth.js";
import upload from "../middlewares/upload.js";
const router = express.Router();

router.post("/users", upload.single("profile"), createUser);
router.get("/users", authMiddleware, getAllUsers);
router.get("/users/:id", getUserById);
router.put(
  "/users/:id",
  upload.single("profile"),
  authMiddleware,
  updateUserById
);
router.delete("/users/:id", authMiddleware, deleteUserById);
router.post("/signin", authMiddleware, signin);

export default router;
