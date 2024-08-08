import Item from "../models/ShopItemModel.js";

// Create a new item
export const createItem = async (req, res) => {
  try {
    const path = req?.file?.path;

    // Parse itemAdditions if it's coming as a string
    let itemAdditions = req.body.itemAdditions;
    if (typeof itemAdditions === 'string') {
      itemAdditions = JSON.parse(itemAdditions);
    }

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

// Update an item by ID
export const updateItemById = async (req, res) => {
  try {
    const path = req?.file?.path;

    // Ensure itemAdditions is an array of ObjectIds
    if (req.body.itemAdditions) {
      req.body.itemAdditions = req.body.itemAdditions.map(
        (id) => mongoose.Types.ObjectId(id)
      );
    }

    const updatedItem = await Item.findByIdAndUpdate(
      req.params.id,
      { ...req.body, itemPhoto: path },
      {
        new: true,
      }
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
