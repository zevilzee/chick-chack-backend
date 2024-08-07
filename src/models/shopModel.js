import mongoose from "mongoose";

// Define the schema
const shopSchema = new mongoose.Schema({
  Tel: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  appointmentDuration: {
    type: String,
    required: false,
  },
  appointments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: "Appointment",
    },
  ],
  city: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "City",
    required: true,
  },
  headerBackground: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  isTemporaryClose: {
    type: Boolean,
    required: true,
  },
  location: {
    lattitude: { type: String, required: true },
    longitude: { type: String, required: true },
  },
  menu: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Item",
      required: false,
    },
  ],
  name: {
    type: String,
    required: true,
  },
  preparationTime: {
    type: String,
    required: true,
  },
  route: {
    type: String,
    required: true,
  },
  shopCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  orders: [
    { type: mongoose.Schema.Types.ObjectId, ref: "order", required: false },
  ],
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  shopType: {
    type: String,
    required: true,
  },
  OrderType: [
    {
      type: String,
      required: true,
    },
  ],
  workingHours: [
    {
      end: { type: String, required: true },
      start: { type: String, required: true },
      isOpen: { type: String, required: true },
      name: { type: String, required: true },
    },
  ],
});

const Shop = mongoose.model("Shop", shopSchema);

export default Shop;
