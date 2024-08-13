import Shop from "../models/shopModel.js";
import order from "../models/OrderMode.js";

// Create a new shop
export const createShop = async (req, res) => {
  try {
    const baseURL = "http://13.48.24.117:3000"; // Your server's base URL
    const headerBackground = req.files["headerBackground"]
      ? req.files["headerBackground"][0].path
      : null;
    const icon = req.files["icon"] ? req.files["icon"][0].path : null;

    // Convert file paths to full URLs
    const headerBackgroundUrl = headerBackground ? `${baseURL}/${headerBackground.replace("uploads", "images")}` : null;
    const iconUrl = icon ? `${baseURL}/${icon.replace("uploads", "images")}` : null;

    const newShop = new Shop({
      ...req.body,
      headerBackground: headerBackgroundUrl,
      icon: iconUrl,
      appointments: req.body.appointments ? JSON.parse(req.body.appointments) : [],
      menu: req.body.menu ? JSON.parse(req.body.menu) : [],
      location: req.body.location ? JSON.parse(req.body.location) : null,
      OrderType: req.body.OrderType ? JSON.parse(req.body.OrderType) : [],
      workingHours: req.body.workingHours ? JSON.parse(req.body.workingHours) : [],
    });

    await newShop.save();
    res.status(201).json(newShop);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


// Get all shops
export const getAllShops = async (req, res) => {
  try {
    const shops = await Shop.find()
      .populate("appointments")
      .populate("city")
      .populate("menu")
      .populate("shopCategory")
      .populate("orders")
      .populate("ownerId");
    res.status(200).json(shops);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a shop by ID
export const getShopById = async (req, res) => {
  try {
    const shop = await Shop.findById(req.params.id)
      .populate("appointments")
      .populate("city")
      .populate("menu")
      .populate("shopCategory")
      .populate("orders")
      .populate("ownerId");
    if (!shop) {
      return res.status(404).json({ error: "Shop not found" });
    }
    res.status(200).json(shop);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a shop by ID
export const updateShopById = async (req, res) => {
  const baseURL = "http://13.48.24.117:3000"; // Your server's base URL
  const headerBackground = req.files["headerBackground"]
    ? req.files["headerBackground"][0].path
    : null;
  const icon = req.files["icon"] ? req.files["icon"][0].path : null;

  try {
    // Convert file paths to full URLs
    const headerBackgroundUrl = headerBackground ? `${baseURL}/${headerBackground.replace("uploads", "images")}` : undefined;
    const iconUrl = icon ? `${baseURL}/${icon.replace("uploads", "images")}` : undefined;

    const updatedShop = await Shop.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
        headerBackground: headerBackgroundUrl,
        icon: iconUrl,
        appointments: req.body.appointments ? JSON.parse(req.body.appointments) : [],
        menu: req.body.menu ? JSON.parse(req.body.menu) : [],
        location: req.body.location ? JSON.parse(req.body.location) : null,
        OrderType: req.body.OrderType ? JSON.parse(req.body.OrderType) : [],
        workingHours: req.body.workingHours ? JSON.parse(req.body.workingHours) : [],
      },
      { new: true }
    );

    if (!updatedShop) {
      return res.status(404).json({ error: "Shop not found" });
    }

    res.status(200).json(updatedShop);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a shop by ID
export const deleteShopById = async (req, res) => {
  try {
    const deletedShop = await Shop.findByIdAndDelete(req.params.id);
    if (!deletedShop) {
      return res.status(404).json({ error: "Shop not found" });
    }
    res.status(200).json({ message: "Shop deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getShopByOwnerId = async (req, res) => {
  try {
    const shop = await Shop.find({ ownerId: req.params.id });
    if (!shop) {
      return res.status(404).json({ error: "Shop not found" });
    }
    res.status(200).json(shop);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getShopByCity = async (req, res) => {
  try {
    const shop = await Shop.find({ city: req.params.id });
    if (!shop) {
      return res.status(404).json({ error: "Shop not found" });
    }
    res.status(200).json(shop);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getShopByCategory = async (req, res) => {
  try {
    const shop = await Shop.find({ shopCategory: req.params.id });
    if (!shop) {
      return res.status(404).json({ error: "Shop not found" });
    }
    res.status(200).json(shop);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get menu items by shop ID
export const getShopMenuByShopId = async (req, res) => {
  try {
    // Get the shop by ID
    const shop = await Shop.findById(req.params.id).populate("menu");
    
    if (!shop) {
      return res.status(404).json({ error: "Shop not found" });
    }

    // Get the menu items using the menu array from the shop document
    const menuItems = await Item.find({ _id: { $in: shop.menu } });

    res.status(200).json(menuItems);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
