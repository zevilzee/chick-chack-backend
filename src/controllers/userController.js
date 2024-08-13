import UserModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import { sendOTP } from "../utils/sendOtp.js";

// Create a new user
export const createUser = async (req, res) => {
  try {
    const profile = req?.file;
    const newUser = new UserModel({ ...req.body, profile: profile?.path });
    await newUser.save();
    const token = jwt.sign({ _id: newUser._id }, process.env.TOKEN_SECRET);
    res
      .header("auth_token", token)
      .status(201)
      .json({ user: newUser, token: token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a user by ID
export const getUserById = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a user by ID
export const updateUserById = async (req, res) => {
  try {
    const profile = req?.file;
    const updatedUser = await UserModel.findByIdAndUpdate(
      req.params.id,
      { ...req.body, profile: profile?.path },
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a user by ID
export const deleteUserById = async (req, res) => {
  try {
    const deletedUser = await UserModel.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const signin = async (req, res) => {
  try {
    const { phone } = req.body;
    const user = await UserModel.findOne({ phone: phone });
    if (user) {
      const otpCode = await sendOTP(user.phone);
      const token = jwt.sign({ _id: user.id }, process.env.TOKEN_SECRET);
      res
        .header("auth_token", token)
        .send({ user: user, token: token, otpCode: otpCode })
        .status(200);
    } else {
      res.status(400).json({ error: "Invalid password" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
