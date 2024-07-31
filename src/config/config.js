import mongoose from "mongoose";
import "dotenv/config";

export const connectDB = async () => {
  try {
    const connectionString = process.env.MONGODB_CONNECTION_STRING;
    await mongoose
      .connect(connectionString)
      .then(() => {
        console.log("Successfully connected to database");
      })
      .catch((error) => {
        console.log("database connection failed. exiting now...");
        console.error(error);
        process.exit(1);
      });
  } catch (err) {
    console.log(`Database error: ${err}`);
  }
};
