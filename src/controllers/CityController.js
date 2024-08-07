import City from "../models/CityModel.js";

// Create a new city
export const createCity = async (req, res) => {
  try {
    const { cityName, location, shopIds } = req.body;
    const swipperPhotos = req.files?.map((file) => file.path);
    const newCity = new City({
      cityName,
      location: location && JSON.parse(location),
      shopIds,
      swipperPhoto: swipperPhotos,
    });
    await newCity.save();
    res.status(201).json(newCity);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all cities
export const getAllCities = async (req, res) => {
  try {
    const cities = await City.find();
    res.status(200).json(cities);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a city by ID
export const getCityById = async (req, res) => {
  try {
    const city = await City.findById(req.params.id);
    if (!city) {
      return res.status(404).json({ error: "City not found" });
    }
    res.status(200).json(city);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a city by ID
export const updateCityById = async (req, res) => {
  try {
    const swipperPhotos = req.files?.map((file) => file.path);
    const updatedCity = await City.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
        swipperPhoto: swipperPhotos,
        location: location && JSON.parse(location),
      },
      {
        new: true,
      }
    );
    if (!updatedCity) {
      return res.status(404).json({ error: "City not found" });
    }
    res.status(200).json(updatedCity);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a city by ID
export const deleteCityById = async (req, res) => {
  try {
    const deletedCity = await City.findByIdAndDelete(req.params.id);
    if (!deletedCity) {
      return res.status(404).json({ error: "City not found" });
    }
    res.status(200).json({ message: "City deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
