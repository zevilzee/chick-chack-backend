import Category from "../models/ShopCategory.js";

// Create a new category
export const createCategory = async (req, res) => {
  try {
    const { categoryName } = req.body;
    categoryPhoto = req?.file?.path;
    if (categoryPhoto === undefined) {
      const newCategory = new Category({
        categoryName,
      });

      await newCategory.save();
      res.status(201).json(newCategory);
    } else {
      const newCategory = new Category({
        categoryName,
        categoryPhoto,
      });
      await newCategory.save();
      res.status(201).json(newCategory);
    }
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
    categoryPhoto = req?.file?.path;
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
