import mongoose from "mongoose";

// Define the schema
const shopSchema = new mongoose.Schema({
  Tel: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
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
    required: false,
  },
  headerBackground: {
    type: String,
    required: false,
  },
  icon: {
    type: String,
    required: false,
  },
  isTemporaryClose: {
    type: Boolean,
    required: false,
  },
  location: {
    lattitude: { type: String, required: false },
    longitude: { type: String, required: false },
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
    required: false,
  },
  preparationTime: {
    type: String,
    required: false,
  },
  route: {
    type: String,
    required: false,
  },
  shopCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: false,
  },
  orders: [
    { type: mongoose.Schema.Types.ObjectId, ref: "order", required: false },
  ],
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: false,
  },
  shopType: {
    type: String,
    required: false,
  },
  OrderType: [
    {
      type: String,
      required: false,
    },
  ],
  workingHours: [
    {
      end: { type: String, required: false },
      start: { type: String, required: false },
      isOpen: { type: String, required: false },
      name: { type: String, required: false },
    },
  ],
});

const Shop = mongoose.model("Shop", shopSchema);

export default Shop;
