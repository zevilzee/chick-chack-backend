import Category from "../models/ShopCategory.js";

// Create a new category
export const createCategory = async (req, res) => {
  try {
    const { categoryName } = req.body;
    let categoryPhoto = null;
    
    if (req.file) {
      const filePath = req.file.path.replace("uploads", "images"); // Change "uploads" to "images" if necessary
      const baseURL = "http://13.48.24.117:3000";
      categoryPhoto = `${baseURL}/${filePath}`;
    }

    const newCategory = new Category({
      categoryName,
      categoryPhoto,
    });

    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all categories
export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a category by ID
export const getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }
    res.status(200).json(category);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a category by ID
export const updateCategoryById = async (req, res) => {
  try {
    let categoryPhoto = undefined;
    
    if (req.file) {
      const filePath = req.file.path.replace("uploads", "images"); // Change "uploads" to "images" if necessary
      const baseURL = "http://13.48.24.117:3000";
      categoryPhoto = `${baseURL}/${filePath}`;
    }

    const updatedCategory = await Category.findByIdAndUpdate(
      req.params.id,
      { ...req.body, categoryPhoto },
      { new: true }
    );

    if (!updatedCategory) {
      return res.status(404).json({ error: "Category not found" });
    }
    res.status(200).json(updatedCategory);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a category by ID
export const deleteCategoryById = async (req, res) => {
  try {
    const deletedCategory = await Category.findByIdAndDelete(req.params.id);
    if (!deletedCategory) {
      return res.status(404).json({ error: "Category not found" });
    }
    res.status(200).json({ message: "Category deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
