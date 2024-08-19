import mongoose from "mongoose";

// Define the schema for AppInfo
const AppInfoSchema = new mongoose.Schema({
    workingHours: [
        {
          end: { type: String, required: true },
          start: { type: String, required: true },
          isOpen: { type: String, required: true },
          name: { type: String, required: true },
        },
    ],
    deliveryHours: [
        {
          end: { type: String, required: true },
          start: { type: String, required: true },
          isOpen: { type: String, required: true },
          name: { type: String, required: true },
        },
    ],
    terms: { type: String, required: true },
    phone: { type: String, required: true }
});

const AppInfo = mongoose.model("AppInfo", AppInfoSchema);

export default AppInfo;
