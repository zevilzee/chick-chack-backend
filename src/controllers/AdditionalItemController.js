import Item from "../models/AdditionalItems.js";

// Create a new item
export const createItem = async (req, res) => {
  try {
    const baseURL = "http://13.48.24.117:3000"; // Your server's base URL
    const filePath = req?.file?.path;
    const additionPhoto = filePath ? `${baseURL}/${filePath.replace("uploads", "images")}` : null;

    const newItem = new Item({
      ...req.body,
      additionPhoto,
    });

    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


// Get all items
export const getAllItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get an item by ID
export const getItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }
    res.status(200).json(item);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update an item by ID
export const updateItemById = async (req, res) => {
  try {
    const baseURL = "http://13.48.24.117:3000"; // Your server's base URL
    const filePath = req?.file?.path;
    const additionPhoto = filePath ? `${baseURL}/${filePath.replace("uploads", "images")}` : undefined;

    const updatedItem = await Item.findByIdAndUpdate(
      req.params.id,
      { ...req.body, additionPhoto },
      { new: true }
    );

    if (!updatedItem) {
      return res.status(404).json({ error: "Item not found" });
    }
    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


// Delete an item by ID
export const deleteItemById = async (req, res) => {
  try {
    const deletedItem = await Item.findByIdAndDelete(req.params.id);
    if (!deletedItem) {
      return res.status(404).json({ error: "Item not found" });
    }
    res.status(200).json({ message: "Item deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
