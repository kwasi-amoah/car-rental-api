import express from "express";
import { createCar } from "../controllers/car.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", protect, createCar);

export default router;