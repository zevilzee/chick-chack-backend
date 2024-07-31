import mongoose from "mongoose";

// Define the schema for appointment
const appointmentSchema = new mongoose.Schema({
  appointmentDate: {
    type: String,
    required: true,
  },
  appointmentDateTime: {
    type: Date,
    required: true,
  },
  appointmentPrice: {
    type: String,
    required: false,
  },
  appointmentTime: {
    type: String,
    required: true,
  },
  appointmentType: {
    type: String,
    required: false,
  },
  clientName: { type: String, required: true },
  clientPhoneNumber: {
    type: String,
    required: true,
  },
  shopId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Shop",
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
});

// Create the model
const Appointment = mongoose.model("Appointment", appointmentSchema);

export default Appointment;
