import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import prisma from "../utils/prisma";

// Extend the Express Request type to include user
declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // Get token from Authorization header or cookies
    const authHeader = req.headers.authorization;
    let token = undefined;

    // First try Authorization header (prioritize this for mobile apps)
    if (authHeader && authHeader.startsWith("Bearer ")) {
      token = authHeader.split(" ")[1];
      console.log(
        `[AUTH] Token found in Authorization header: ${token.substring(
          0,
          10
        )}...`
      );
    }
    // Then fallback to cookie
    else if (req.cookies && req.cookies.token) {
      token = req.cookies.token;
      console.log(`[AUTH] Token found in cookie: ${token.substring(0, 10)}...`);
    }

    if (!token) {
      console.log(`[AUTH] No token found - Headers:`, Object.keys(req.headers));
      console.log(`[AUTH] Authorization header:`, req.headers.authorization);
      console.log(`[AUTH] Cookies:`, req.cookies);
      return res
        .status(401)
        .json({ message: "Access denied. No token provided." });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
      id: string;
      iat: number;
      exp: number;
    };

    console.log(
      `[AUTH] Token verified successfully for user ID: ${decoded.id}`
    );
    console.log(
      `[AUTH] Token expiration: ${new Date(decoded.exp * 1000).toISOString()}`
    );

    // Get user from database
    const user = await prisma.user.findUnique({
      where: { id: Number(decoded.id) },
      select: {
        id: true,
        name: true,
        email: true,
        cpf: true,
        // Exclude password and large binary data
      },
    });

    if (!user) {
      console.log(`[AUTH] User with ID ${decoded.id} not found in database`);
      return res.status(404).json({ message: "User not found" });
    }

    // Attach user to request
    req.user = user;
    console.log(`[AUTH] User authenticated: ${user.id}, ${user.name}`);
    next();
  } catch (error: any) {
    console.error(`[AUTH] Token verification error:`, error.message);
    if (error.name === "TokenExpiredError") {
      return res
        .status(401)
        .json({ message: "Token expired. Please log in again." });
    }
    return res.status(401).json({ message: "Invalid token" });
  }
};

// Optional admin middleware for future use
export const adminMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Check if user is admin
  if (!req.user || !req.user.isAdmin) {
    return res
      .status(403)
      .json({ message: "Access denied. Admin rights required." });
  }
  next();
};
