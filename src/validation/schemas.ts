import { z } from "zod";

// User validation schemas
export const registerSchema = z
  .object({
    name: z.string().min(3).max(100),
    cpf: z.string().regex(/^\d{11}$/, "CPF must be 11 digits"),
    email: z.string().email(),
    password: z.string().min(8),
    avatarImage: z.any().optional(),
    role: z.number().min(1).max(2).optional(), // 1: normal user, 2: admin user
  })
  .passthrough();

export const loginSchema = z.object({
  cpf: z.string().regex(/^\d{11}$/, "CPF must be 11 digits"),
  password: z.string().min(1),
});

// Voting pool validation schemas
export const votingOptionSchema = z.object({
  text: z.string().min(1),
  description: z.string().optional(),
  image: z.any().optional(),
});

export const votingPoolSchema = z
  .object({
    title: z.string().min(3).max(100),
    description: z.string().min(10),
    category: z.string().min(3),
    image: z.any().optional(),
    startDate: z.string(),
    endDate: z.string(),
    anonymous: z.preprocess((val) => {
      // Handle different types of input
      if (typeof val === "string") {
        // Convert string to boolean
        return val.toLowerCase() === "true";
      }
      return Boolean(val); // Convert any other type to boolean
    }, z.boolean().default(false)),
    options: z.array(votingOptionSchema).min(2),
    latitude: z.number().optional(),
    longitude: z.number().optional(),
    address: z.string().optional(),
  })
  .passthrough();

export const updateVotingPoolSchema = z
  .object({
    title: z.string().min(3).max(100).optional(),
    description: z.string().min(10).optional(),
    category: z.string().min(3).optional(),
    image: z.any().optional(),
    startDate: z.string().optional(),
    endDate: z.string().optional(),
    anonymous: z.preprocess((val) => {
      // Handle different types of input
      if (typeof val === "string") {
        // Convert string to boolean
        return val.toLowerCase() === "true";
      }
      return Boolean(val); // Convert any other type to boolean
    }, z.boolean().optional()),
    options: z.array(votingOptionSchema).min(2).optional(),
    status: z.enum(["active", "upcoming", "closed"]).optional(),
    latitude: z.number().optional(),
    longitude: z.number().optional(),
    address: z.string().optional(),
  })
  .passthrough();

// Vote validation schema
export const voteSchema = z.object({
  poolId: z.string().uuid(),
  optionId: z.string().uuid(),
});
