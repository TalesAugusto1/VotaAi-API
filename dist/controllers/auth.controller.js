"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAvatar = exports.getUserAvatar = exports.getMe = exports.logout = exports.login = exports.register = void 0;
const prisma_1 = __importDefault(require("../utils/prisma"));
const auth_1 = require("../utils/auth");
const register = async (req, res) => {
    console.log(`[AUTH] Register attempt for email: ${req.body.email}, cpf: ${req.body.cpf?.substring(0, 3)}***`);
    console.log(`[AUTH] Request body keys: ${Object.keys(req.body).join(", ")}`);
    console.log(`[AUTH] Has file: ${!!req.file}, File field name: ${req.file?.fieldname}`);
    try {
        const { name, cpf, email, password } = req.body;
        // Handle avatarImage separately - it should be in req.body.avatarImage if processed by middleware
        // or available as req.file if not yet processed
        const avatarImage = req.body.avatarImage || (req.file ? req.file.buffer : null);
        // Log registration details
        console.log(`[AUTH] Registration details - Name: ${name}, Email: ${email}, CPF: ${cpf?.substring(0, 3)}***, Has Avatar: ${!!avatarImage}`);
        // Validate required fields
        if (!name || !cpf || !email || !password) {
            const errorMessage = "Missing required fields";
            console.log(`[AUTH] Registration failed - ${errorMessage}`);
            console.log(`[AUTH] Sending response - Status: 400, Message: "${errorMessage}"`);
            return res.status(400).json({ message: errorMessage });
        }
        // Check if user already exists
        const existingUser = await prisma_1.default.user.findFirst({
            where: {
                OR: [{ cpf }, { email }],
            },
        });
        if (existingUser) {
            const errorMessage = existingUser.cpf === cpf
                ? "CPF already registered"
                : "Email already registered";
            console.log(`[AUTH] Registration failed - ${existingUser.cpf === cpf
                ? "CPF already exists"
                : "Email already exists"}`);
            // Log the response being sent
            console.log(`[AUTH] Sending response - Status: 400, Message: "${errorMessage}"`);
            return res.status(400).json({
                message: errorMessage,
            });
        }
        // Hash password
        const hashedPassword = await (0, auth_1.hashPassword)(password);
        console.log(`[AUTH] Password hashed successfully for ${email}`);
        // Create user
        const user = await prisma_1.default.user.create({
            data: {
                name,
                cpf,
                email,
                password: hashedPassword,
                avatarImage,
                role: 1, // Default to normal user
            },
            select: {
                id: true,
                name: true,
                cpf: true,
                email: true,
                avatarImage: true,
                role: true,
                createdAt: true,
            },
        });
        console.log(`[AUTH] User created successfully - ID: ${user.id}, Email: ${email}, Role: ${user.role}`);
        // Generate JWT token
        const token = (0, auth_1.generateToken)(user.id);
        console.log(`[AUTH] JWT token generated for user ID: ${user.id}`);
        // Set token in cookie
        (0, auth_1.setCookieToken)(res, token);
        console.log(`[AUTH] JWT token set in cookie`);
        // Return user data and token
        console.log(`[AUTH] Registration complete - User: ${user.id}`);
        // Log the success response
        console.log(`[AUTH] Sending response - Status: 201, Message: "User created successfully", User ID: ${user.id}`);
        return res.status(201).json({
            message: "User created successfully",
            user: {
                ...user,
                hasAvatar: !!user.avatarImage,
                avatarImage: undefined, // Don't send binary data in response
            },
            token,
        });
    }
    catch (error) {
        // Detailed error logging
        console.error(`[AUTH] Registration error details:`);
        console.error(`[AUTH] Error message: ${error.message}`);
        console.error(`[AUTH] Error stack: ${error.stack}`);
        if (error.code) {
            console.error(`[AUTH] Error code: ${error.code}`);
        }
        if (error.meta) {
            console.error(`[AUTH] Error metadata: ${JSON.stringify(error.meta)}`);
        }
        // Log the error response being sent
        console.error(`[AUTH] Sending error response - Status: 500, Message: "Server error during registration"`);
        return res
            .status(500)
            .json({ message: "Server error during registration" });
    }
};
exports.register = register;
const login = async (req, res) => {
    console.log(`[AUTH] Login attempt for CPF: ${req.body.cpf?.substring(0, 3)}***`);
    try {
        const { cpf, password } = req.body;
        // Find user
        const user = await prisma_1.default.user.findUnique({
            where: { cpf },
            select: {
                id: true,
                name: true,
                cpf: true,
                email: true,
                password: true,
                avatarImage: true,
                role: true,
                createdAt: true,
                updatedAt: true,
            },
        });
        if (!user) {
            console.log(`[AUTH] Login failed - User with CPF ${cpf?.substring(0, 3)}*** not found`);
            return res.status(401).json({ message: "Invalid credentials" });
        }
        console.log(`[AUTH] User found - ID: ${user.id}, Email: ${user.email}`);
        // Check password
        const isPasswordValid = await (0, auth_1.comparePassword)(password, user.password);
        if (!isPasswordValid) {
            console.log(`[AUTH] Login failed - Invalid password for user ID: ${user.id}`);
            return res.status(401).json({ message: "Invalid credentials" });
        }
        console.log(`[AUTH] Password validated for user ID: ${user.id}`);
        // Generate token
        const token = (0, auth_1.generateToken)(user.id);
        console.log(`[AUTH] JWT token generated for user ID: ${user.id}`);
        // Set token in cookie (for web clients)
        (0, auth_1.setCookieToken)(res, token);
        console.log(`[AUTH] JWT token set in cookie for user ID: ${user.id}`);
        // Return user data without password and avatar binary
        const { password: _, avatarImage: __, ...userWithoutSensitiveData } = user;
        // Add a flag indicating whether the user has an avatar
        const hasAvatar = !!user.avatarImage;
        console.log(`[AUTH] User has avatar: ${hasAvatar}`);
        console.log(`[AUTH] Login successful - User ID: ${user.id}`);
        // Log the success response
        console.log(`[AUTH] Sending response - Status: 200, Message: "Login successful", User ID: ${user.id}, Token length: ${token.length}`);
        // Return the token both in the response body (for mobile clients)
        // and in cookie (for web clients)
        return res.status(200).json({
            message: "Login successful",
            user: {
                ...userWithoutSensitiveData,
                hasAvatar,
            },
            token, // Include token in response for mobile clients
        });
    }
    catch (error) {
        // Detailed error logging
        console.error(`[AUTH] Login error details:`);
        console.error(`[AUTH] Error message: ${error.message}`);
        console.error(`[AUTH] Error stack: ${error.stack}`);
        if (error.code) {
            console.error(`[AUTH] Error code: ${error.code}`);
        }
        if (error.meta) {
            console.error(`[AUTH] Error metadata: ${JSON.stringify(error.meta)}`);
        }
        // Log the error response being sent
        console.error(`[AUTH] Sending error response - Status: 500, Message: "Server error during login"`);
        return res.status(500).json({ message: "Server error during login" });
    }
};
exports.login = login;
const logout = (req, res) => {
    console.log(`[AUTH] Logout request received - User ID: ${req.user?.id || "Unknown"}`);
    res.clearCookie("token");
    console.log(`[AUTH] Token cookie cleared`);
    return res.status(200).json({ message: "Logout successful" });
};
exports.logout = logout;
const getMe = async (req, res) => {
    console.log(`[AUTH] Get current user profile - User ID: ${req.user?.id}`);
    try {
        // User is attached from auth middleware
        // We need to fetch fresh data to get the avatar
        const user = await prisma_1.default.user.findUnique({
            where: { id: req.user.id },
            select: {
                id: true,
                name: true,
                cpf: true,
                email: true,
                password: true,
                avatarImage: true,
                role: true,
                createdAt: true,
                updatedAt: true,
            },
        });
        if (!user) {
            console.log(`[AUTH] User not found - ID: ${req.user.id}`);
            return res.status(404).json({ message: "User not found" });
        }
        console.log(`[AUTH] User found - ID: ${user.id}, Email: ${user.email}`);
        // Remove sensitive data
        const { password: _, avatarImage: __, ...userWithoutSensitiveData } = user;
        // Add a flag indicating whether the user has an avatar
        const hasAvatar = !!user.avatarImage;
        console.log(`[AUTH] User has avatar: ${hasAvatar}`);
        console.log(`[AUTH] Get current user successful - User ID: ${user.id}`);
        return res.status(200).json({
            user: {
                ...userWithoutSensitiveData,
                hasAvatar,
            },
        });
    }
    catch (error) {
        console.error("[AUTH] Get user error:", error);
        return res
            .status(500)
            .json({ message: "Server error retrieving user data" });
    }
};
exports.getMe = getMe;
// Add new endpoint to get user avatar image
const getUserAvatar = async (req, res) => {
    const params = req.params;
    const userId = parseInt(params.userId, 10);
    console.log(`[AUTH] Get avatar request for user ID: ${userId}`);
    try {
        const user = await prisma_1.default.user.findUnique({
            where: { id: userId },
            select: { avatarImage: true },
        });
        if (!user || !user.avatarImage) {
            console.log(`[AUTH] Avatar not found for user ID: ${userId}`);
            return res.status(404).json({ message: "Avatar not found" });
        }
        console.log(`[AUTH] Avatar found for user ID: ${userId}, Size: ${user.avatarImage.byteLength} bytes`);
        // Set content type to image
        res.setHeader("Content-Type", "image/jpeg");
        console.log(`[AUTH] Serving avatar image for user ID: ${userId}`);
        // Send the binary image data
        return res.send(user.avatarImage);
    }
    catch (error) {
        console.error("[AUTH] Get avatar error:", error);
        return res.status(500).json({ message: "Server error retrieving avatar" });
    }
};
exports.getUserAvatar = getUserAvatar;
// Add endpoint to update user avatar
const updateAvatar = async (req, res) => {
    const userId = req.user.id;
    console.log(`[AUTH] Update avatar request - User ID: ${userId}`);
    try {
        const { avatarImage } = req.body;
        if (!avatarImage) {
            console.log(`[AUTH] Update avatar failed - No image provided for user ID: ${userId}`);
            return res.status(400).json({ message: "No avatar image provided" });
        }
        console.log(`[AUTH] Processing avatar update - User ID: ${userId}, Image size: ${avatarImage.byteLength} bytes`);
        await prisma_1.default.user.update({
            where: { id: userId },
            data: { avatarImage },
        });
        console.log(`[AUTH] Avatar updated successfully - User ID: ${userId}`);
        return res.status(200).json({ message: "Avatar updated successfully" });
    }
    catch (error) {
        console.error("[AUTH] Update avatar error:", error);
        return res.status(500).json({ message: "Server error updating avatar" });
    }
};
exports.updateAvatar = updateAvatar;
