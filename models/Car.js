import mongoose from "mongoose";

const carSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    brand: { type: String, required: true },
    dailyRate: { type: Number, required: true },
    licensePlate: { type: String, required: true, unique: true }, 
  },
  { timestamps: true }
);

export default mongoose.model("Car", carSchema);
