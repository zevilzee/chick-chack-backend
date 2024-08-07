import mongoose from "mongoose";

// Define the schema for item
const itemSchema = new mongoose.Schema({
  itemAdditions: [
    { type: mongoose.Schema.Types.ObjectId, ref: "AdditionalItem" },
  ],
  itemAvailability: { type: Boolean, required: false },
  itemCategory: { type: String, required: false },
  itemDescription: { type: String, required: false },
  itemName: { type: String, required: false },
  itemPhoto: { type: String, required: false },
  itemPrice: { type: String, required: false },
});

// Create the model
const Item = mongoose.model("Item", itemSchema);

export default Item;
