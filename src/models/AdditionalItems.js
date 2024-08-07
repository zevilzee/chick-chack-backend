import mongoose from "mongoose";

// Define the schema for item additions
const additionSchema = new mongoose.Schema({
  additionAvailability: { type: Boolean, required: false },
  additionName: { type: String, required: false },
  additionPhoto: { type: String, required: false },
  additionPrice: { type: String, required: false },
});
const AdditionalItem = mongoose.model("AdditionalItem", additionSchema);

export default AdditionalItem;
