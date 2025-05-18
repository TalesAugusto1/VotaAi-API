"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const validation_middleware_1 = require("../middleware/validation.middleware");
const schemas_1 = require("../validation/schemas");
const auth_middleware_1 = require("../middleware/auth.middleware");
const upload_middleware_1 = require("../middleware/upload.middleware");
const router = (0, express_1.Router)();
// Register new user - now with file upload
router.post("/register", (0, upload_middleware_1.uploadSingle)("avatar"), upload_middleware_1.processImage, (0, validation_middleware_1.validate)(schemas_1.registerSchema), auth_controller_1.register);
// Login user
router.post("/login", (0, validation_middleware_1.validate)(schemas_1.loginSchema), auth_controller_1.login);
// Logout user
router.post("/logout", auth_controller_1.logout);
// Get current user
router.get("/me", auth_middleware_1.authMiddleware, auth_controller_1.getMe);
// Get user avatar
router.get("/avatar/:userId", auth_controller_1.getUserAvatar);
// Update user avatar
router.post("/avatar", auth_middleware_1.authMiddleware, (0, upload_middleware_1.uploadSingle)("avatar"), upload_middleware_1.processImage, auth_controller_1.updateAvatar);
exports.default = router;
