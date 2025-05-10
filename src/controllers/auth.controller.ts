import { Request, Response } from "express";
import prisma from "../utils/prisma";
import {
  hashPassword,
  comparePassword,
  generateToken,
  setCookieToken,
} from "../utils/auth";

export const register = async (req: Request, res: Response) => {
  try {
    const { name, cpf, email, password, avatarImage } = req.body;

    // Check if user already exists
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [{ cpf }, { email }],
      },
    });

    if (existingUser) {
      return res.status(400).json({
        message:
          existingUser.cpf === cpf
            ? "CPF already registered"
            : "Email already registered",
      });
    }

    // Hash password
    const hashedPassword = await hashPassword(password);

    // Create user
    const user = await prisma.user.create({
      data: {
        name,
        cpf,
        email,
        password: hashedPassword,
        avatarImage,
      },
      select: {
        id: true,
        name: true,
        cpf: true,
        email: true,
        avatarImage: true,
        createdAt: true,
      },
    });

    // Generate JWT token
    const token = generateToken(user.id);

    // Set token in cookie
    setCookieToken(res, token);

    // Return user data and token
    return res.status(201).json({
      message: "User created successfully",
      user,
      token,
    });
  } catch (error) {
    console.error("Registration error:", error);
    return res
      .status(500)
      .json({ message: "Server error during registration" });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { cpf, password } = req.body;

    // Find user
    const user = await prisma.user.findUnique({
      where: { cpf },
    });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Check password
    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate token
    const token = generateToken(user.id);

    // Set token in cookie
    setCookieToken(res, token);

    // Return user data without password and avatar binary
    const { password: _, avatarImage: __, ...userWithoutSensitiveData } = user;

    // Add a flag indicating whether the user has an avatar
    const hasAvatar = !!user.avatarImage;

    return res.status(200).json({
      message: "Login successful",
      user: {
        ...userWithoutSensitiveData,
        hasAvatar,
      },
      token,
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Server error during login" });
  }
};

export const logout = (req: Request, res: Response) => {
  res.clearCookie("token");
  return res.status(200).json({ message: "Logout successful" });
};

export const getMe = async (req: Request, res: Response) => {
  try {
    // User is attached from auth middleware
    // We need to fetch fresh data to get the avatar
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Remove sensitive data
    const { password: _, avatarImage: __, ...userWithoutSensitiveData } = user;

    // Add a flag indicating whether the user has an avatar
    const hasAvatar = !!user.avatarImage;

    return res.status(200).json({
      user: {
        ...userWithoutSensitiveData,
        hasAvatar,
      },
    });
  } catch (error) {
    console.error("Get user error:", error);
    return res
      .status(500)
      .json({ message: "Server error retrieving user data" });
  }
};

// Add new endpoint to get user avatar image
export const getUserAvatar = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { avatarImage: true },
    });

    if (!user || !user.avatarImage) {
      return res.status(404).json({ message: "Avatar not found" });
    }

    // Set content type to image
    res.setHeader("Content-Type", "image/jpeg");

    // Send the binary image data
    return res.send(user.avatarImage);
  } catch (error) {
    console.error("Get avatar error:", error);
    return res.status(500).json({ message: "Server error retrieving avatar" });
  }
};

// Add endpoint to update user avatar
export const updateAvatar = async (req: Request, res: Response) => {
  try {
    const userId = req.user.id;
    const { avatarImage } = req.body;

    if (!avatarImage) {
      return res.status(400).json({ message: "No avatar image provided" });
    }

    await prisma.user.update({
      where: { id: userId },
      data: { avatarImage },
    });

    return res.status(200).json({ message: "Avatar updated successfully" });
  } catch (error) {
    console.error("Update avatar error:", error);
    return res.status(500).json({ message: "Server error updating avatar" });
  }
};
