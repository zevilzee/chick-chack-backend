import mongoose from "mongoose";

// Define the schema
const citySchema = new mongoose.Schema({
  cityUid: { type: String, required: false },
  location: {
    lattitude: { type: String, required: false },
    longitude: { type: String, required: false },
  },
  //   shopsUid: { type: [String], required: false },
  //   swiperPhoto: { type: [String], required: false },
});

// Create the model
const City = mongoose.model("City", citySchema);

export default City;
