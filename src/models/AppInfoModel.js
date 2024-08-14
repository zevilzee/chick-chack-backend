import mongoose from "mongoose";

// Define the schema for AppInfo
const AppInfoSchema = new mongoose.Schema({
  workingHours: {
    type: Map,
    of: {
      start: { type: String, required: true },
      end: { type: String, required: true }
    }
  },
  deliveryHours: {
    type: Map,
    of: {
      start: { type: String, required: true },
      end: { type: String, required: true }
    }
  },
  terms: { type: String, required: true },
  phone: { type: String, required: true }
});

const AppInfo = mongoose.model("AppInfo", AppInfoSchema);

export default AppInfo;
