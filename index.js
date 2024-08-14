import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { connectDB } from "./src/config/config.js";
import AppInfoRouter from "./src/routes/appRoutes.js";
import userRouter from "./src/routes/userRoutes.js";
import cityRouter from "./src/routes/CityRoutes.js";
import categoryRouter from "./src/routes/CategoryRoutes.js";
import ShopItemRouter from "./src/routes/ShopItemRoutes.js";
import AppointmentRouter from "./src/routes/AppointmentRoutes.js";
import ShopRouter from "./src/routes/ShopRoutes.js";
import TrnasportRoutes from "./src/routes/TransporterRoutes.js";
import AdditionItemRoutes from "./src/routes/AdditionalItemRoutes.js";

dotenv.config();
const app = express();
app.use(cors());
const dbConnection = async () => {
  try {
    await connectDB();
  } catch (err) {
    process.exit(1);
  }
};
dbConnection();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/AppInfo", AppInfoRouter);
app.use("/images", express.static("uploads"));
app.use("/user", userRouter);
app.use("/city", cityRouter);
app.use("/category", categoryRouter);
app.use("/shopItem", ShopItemRouter);
app.use("/appointment", AppointmentRouter);
app.use("/shop", ShopRouter);
app.use("/transporter", TrnasportRoutes);
app.use("/AdditionItems", AdditionItemRoutes);
app.listen(3000, () => {
  console.log("Server is running");
});
