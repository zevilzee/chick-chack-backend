import jwt from "jsonwebtoken";
import UserModel from "../models/userModel.js";

const authMiddleware = async (req, res, next) => {
  const token = req.header("auth-token");

  if (!token) {
    return res.status(401).send("Access Denied");
  }

  try {
    const verification = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verification;
    req.user = await UserModel.findById(verification._id);

    if (!req.user) {
      return res.status(401).send("Access Denied");
    }

    next();
  } catch (err) {
    return res.status(400).send("Invalid Token");
  }
};

export default authMiddleware;
