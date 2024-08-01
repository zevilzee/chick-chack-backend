import mongoose from "mongoose";

// Define the schema
const citySchema = new mongoose.Schema({
  cityName: { type: String, required: true },
  location: {
    lattitude: { type: String, required: false },
    longitude: { type: String, required: false },
  },
  shopIds: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Shop",
    },
  ],
  swipperPhoto: [
    {
      type: String,
      required: false,
    },
  ],
});

// Create the model
const City = mongoose.model("City", citySchema);

export default City;
