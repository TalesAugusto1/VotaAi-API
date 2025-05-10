import { Router } from "express";
import {
  register,
  login,
  logout,
  getMe,
  getUserAvatar,
  updateAvatar,
} from "../controllers/auth.controller";
import { validate } from "../middleware/validation.middleware";
import { registerSchema, loginSchema } from "../validation/schemas";
import { authMiddleware } from "../middleware/auth.middleware";
import { uploadSingle, processImage } from "../middleware/upload.middleware";

const router = Router();

// Register new user - now with file upload
router.post(
  "/register",
  uploadSingle("avatar"),
  processImage,
  validate(registerSchema),
  register
);

// Login user
router.post("/login", validate(loginSchema), login);

// Logout user
router.post("/logout", logout);

// Get current user
router.get("/me", authMiddleware, getMe);

// Get user avatar
router.get("/avatar/:userId", getUserAvatar);

// Update user avatar
router.post(
  "/avatar",
  authMiddleware,
  uploadSingle("avatar"),
  processImage,
  updateAvatar
);

export default router;
