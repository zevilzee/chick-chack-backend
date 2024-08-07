import { Document, Schema, model, Model, Types } from "mongoose";

const UserSchema = new Schema(
  {
    email: { type: String, required: false },
    name: { type: String, required: false },
    password: { type: String, required: false },
    role: { type: String, required: true },
    phone: { type: String, required: true },
    profile: { type: String, required: false },
    expoPushToken: {
      type: String,
    },
  },
  { timestamps: true }
);
const UserModel = model("user", UserSchema);

export default UserModel;
