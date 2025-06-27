import express from "express";
import { createUser, getUsers, getUserById, updateUser, deleteUser } from "../controllers/user.controller.js";
import { protect } from "../middleware/auth.middleware.js";
import { isAdmin, isSelfOrAdmin } from "../middleware/role.middleware.js";

const router = express.Router();

router.post("/", createUser);
router.get("/", protect, isAdmin, getUsers);
router.get("/:id", protect, isSelfOrAdmin, getUserById);
router.put("/:id", protect, isSelfOrAdmin, updateUser);
router.delete("/:id", protect, isSelfOrAdmin, deleteUser);

export default router;