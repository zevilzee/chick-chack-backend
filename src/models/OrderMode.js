import mongoose from "mongoose";

// Define the schema
const OrderSchema = new mongoose.Schema({
  OrderName: { type: String, required: true },
});

// Create the model
const Order = mongoose.model("order", OrderSchema);

export default Order;
