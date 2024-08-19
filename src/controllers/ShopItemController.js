import Item from "../models/ShopItemModel.js";
import mongoose from "mongoose";

// Base URL for images
const baseURL = "http://13.48.24.117:3000/images";

// Create a new item
export const createItem = async (req, res) => {
  try {
    const path = req?.file?.path ? `${baseURL}/${req.file.path.replace("uploads", "images")}` : null;

    // Parse itemAdditions if it's coming as a string
    let itemAdditions = req.body.itemAdditions;
    if (typeof itemAdditions === 'string') {
      itemAdditions = JSON.parse(itemAdditions);
    }

    // Convert itemAdditions to ObjectIds
    itemAdditions = itemAdditions.map(id => new mongoose.Types.ObjectId(id));

    const newItem = new Item({
      ...req.body,
      itemAdditions, // ensure this is an array of ObjectIds
      itemPhoto: path,
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

// Get additional items by item ID
export const getItemAdditionsByItemId = async (req, res) => {
  try {
    // Find the item by ID and populate the itemAdditions field
    const item = await Item.findById(req.params.id).populate('itemAdditions');

    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }

    // Return the populated itemAdditions field
    res.status(200).json(item.itemAdditions);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update an item by ID
export const updateItemById = async (req, res) => {
  try {
    const path = req?.file?.path ? `${baseURL}/${req.file.path.replace("uploads", "images")}` : null;

    // Ensure itemAdditions is an array of ObjectIds
    if (req.body.itemAdditions) {
      if (typeof req.body.itemAdditions === 'string') {
        req.body.itemAdditions = JSON.parse(req.body.itemAdditions);
      }
      req.body.itemAdditions = req.body.itemAdditions.map(id => new mongoose.Types.ObjectId(id));
    }

    const updatedItem = await Item.findByIdAndUpdate(
      req.params.id,
      { ...req.body, itemPhoto: path },
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
