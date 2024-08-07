import mongoose from "mongoose";

// Define the schema for item
const itemSchema = new mongoose.Schema({
  itemAdditions: [
    { type: mongoose.Schema.Types.ObjectId, ref: "AdditionalItem" },
  ],
  itemAvailability: { type: Boolean, required: false },
  itemCategory: { type: String, required: true },
  itemDescription: { type: String, required: false },
  itemName: { type: String, required: true },
  itemPhoto: { type: String, required: true },
  itemPrice: { type: String, required: true },
});

// Create the model
const Item = mongoose.model("Item", itemSchema);

export default Item;
