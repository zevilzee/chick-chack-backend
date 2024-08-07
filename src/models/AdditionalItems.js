import mongoose from "mongoose";

// Define the schema for item additions
const additionSchema = new mongoose.Schema({
  additionAvailability: { type: Boolean, required: false },
  additionName: { type: String, required: true },
  additionPhoto: { type: String, required: true },
  additionPrice: { type: String, required: true },
});
const AdditionalItem = mongoose.model("AdditionalItem", additionSchema);

export default AdditionalItem;
