import mongoose from "mongoose";

// Define the schema
const categorySchema = new mongoose.Schema({
  categoryName: { type: String, required: true },
  categoryPhoto: { type: String, required: false },
});

// Create the model
const Category = mongoose.model("Category", categorySchema);

export default Category;
