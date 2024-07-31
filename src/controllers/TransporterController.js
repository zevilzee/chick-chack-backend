import Transporter from "../models/TrasporterModel.js";

// Create a new transporter
export const createTransporter = async (req, res) => {
  try {
    const { citiesId, name, openStatus, userId, workingHours } = req.body;

    const newTransporter = new Transporter({
      citiesId,
      name,
      openStatus,
      userId,
      workingHours,
    });

    await newTransporter.save();
    res.status(201).json(newTransporter);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all transporters
export const getAllTransporters = async (req, res) => {
  try {
    const transporters = await Transporter.find()
      .populate("citiesId")
      .populate("userId");
    res.status(200).json(transporters);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a transporter by ID
export const getTransporterById = async (req, res) => {
  try {
    const transporter = await Transporter.findById(req.params.id)
      .populate("citiesId")
      .populate("userId");
    if (!transporter) {
      return res.status(404).json({ error: "Transporter not found" });
    }
    res.status(200).json(transporter);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a transporter by ID
export const updateTransporterById = async (req, res) => {
  try {
    const updatedTransporter = await Transporter.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedTransporter) {
      return res.status(404).json({ error: "Transporter not found" });
    }
    res.status(200).json(updatedTransporter);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a transporter by ID
export const deleteTransporterById = async (req, res) => {
  try {
    const deletedTransporter = await Transporter.findByIdAndDelete(
      req.params.id
    );
    if (!deletedTransporter) {
      return res.status(404).json({ error: "Transporter not found" });
    }
    res.status(200).json({ message: "Transporter deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
