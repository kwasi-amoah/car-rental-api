import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, unique: true },
    items: [
      {
        carId: { type: mongoose.Schema.Types.ObjectId, ref: "Car", required: true },
        quantity: { type: Number, default: 1, min: 1 },
      }
    ],
  },
  { timestamps: true }
);


export default mongoose.model("Cart", cartSchema);