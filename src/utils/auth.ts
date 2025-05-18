import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Response } from "express";

export const hashPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

export const comparePassword = async (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  return await bcrypt.compare(password, hashedPassword);
};

export const generateToken = (userId: number): string => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in environment variables");
  }

  const expiresIn: any = process.env.JWT_EXPIRES_IN || "7d";
  console.log(
    `[AUTH] Generating token for user ${userId} with expiration: ${expiresIn}`
  );

  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn });
};

export const setCookieToken = (res: Response, token: string): void => {
  const isProduction = process.env.NODE_ENV === "production";

  res.cookie("token", token, {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? "strict" : "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  console.log(
    `[AUTH] Token set in cookie - Length: ${
      token.length
    }, Prefix: ${token.substring(0, 10)}...`
  );
};

export const verifyToken = (token: string): { id: string } => {
  const jwtSecret = process.env.JWT_SECRET;
  if (!jwtSecret) {
    throw new Error("JWT_SECRET is not defined in environment variables");
  }

  try {
    const decoded = jwt.verify(token, jwtSecret as jwt.Secret) as {
      id: string;
    };
    return decoded;
  } catch (error: any) {
    console.error(`[AUTH] Token verification failed: ${error.message}`);
    throw new Error(`Invalid token: ${error.message}`);
  }
};
