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

// Get a user by phone number
export const getUserByPhone = async (req, res) => {
  try {
    const { phone } = req.params;
    const user = await UserModel.findOne({ phone: phone });
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

// Send OTP code to user
export const sendOtpCode = async (req, res) => {
  try {
    const { phone } = req.body;
    const otpCode = await sendOTP(phone);
    res.status(200).json({ otpCode: otpCode });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Sign in user and generate token
export const signin = async (req, res) => {
  try {
    const { phone } = req.body;
    const user = await UserModel.findOne({ phone: phone });
    if (user) {
      const token = jwt.sign({ _id: user.id }, process.env.TOKEN_SECRET);
      res
        .header("auth_token", token)
        .status(200)
        .json({ user: user, token: token });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
