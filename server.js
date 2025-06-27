import express from "express";
import dotenv from "dotenv";
import { connectMongo } from "./config/mongoClient.js"; 
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";
import carRoutes from "./routes/car.routes.js";
import cartRoutes from "./routes/cart.routes.js";
import cookieParser from "cookie-parser";


const app = express();
dotenv.config();
await connectMongo(); // connect to MongoDB before starting the server


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/cars", carRoutes);
app.use("/api/cart", cartRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
