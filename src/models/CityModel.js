import mongoose from "mongoose";

// Define the schema
const citySchema = new mongoose.Schema({
  cityName: { type: String, required: true },
  location: {
    latitude: { type: String, required: true },
    longitude: { type: String, required: true },
  },
  swiperPhoto: [
    {
      type: String,
      required: false,
    },
  ],
});

// Create the model
const City = mongoose.model("City", citySchema);

export default City;
