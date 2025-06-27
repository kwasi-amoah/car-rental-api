import Car from "../models/Car.js";

export const createCar = async (req, res) => {
  try {
    const { name, brand, dailyRate, licensePlate } = req.body;

    // Validate required fields
    if (!name || !brand || !dailyRate || !licensePlate) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Check if car with this license plate already exists
    const existingCar = await Car.findOne({ licensePlate });
    if (existingCar) {
      return res.status(409).json({ error: "Car with this license plate already exists" });
    }

    // Create car
    const car = await Car.create({ name, brand, dailyRate, licensePlate });
    res.status(201).json(car);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
