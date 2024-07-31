import mongoose from "mongoose";
const dbSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  body: {
    type: (body = {}),
    required: true,
  },
  data: {
    type: (data = {}),
    required: true,
  },
});

const Notification = new mongoose.model("Notifications", dbSchema);

export default Notification;
