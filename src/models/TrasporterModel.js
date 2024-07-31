import mongoose from "mongoose";

// Define the schema for working hours
const workingHoursSchema = new mongoose.Schema(
  {
    end: { type: String, required: true },
    isOpen: { type: Boolean, required: true },
    start: { type: String, required: true },
  },
  { _id: false }
);

// Define the schema for transporter
const transporterSchema = new mongoose.Schema({
  citiesId: [{ type: mongoose.Schema.Types.ObjectId, ref: "City" }],
  name: { type: String, required: true },
  openStatus: { type: Boolean, required: false },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  workingHours: {
    Friday: workingHoursSchema,
    Monday: workingHoursSchema,
    Saturday: workingHoursSchema,
    Sunday: workingHoursSchema,
    Thursday: workingHoursSchema,
    Tuesday: workingHoursSchema,
    Wednesday: workingHoursSchema,
  },
});

// Create the model
const Transporter = mongoose.model("Transporter", transporterSchema);

export default Transporter;
