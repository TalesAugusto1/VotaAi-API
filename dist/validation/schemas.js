"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.voteSchema = exports.updateVotingPoolSchema = exports.votingPoolSchema = exports.votingOptionSchema = exports.loginSchema = exports.registerSchema = void 0;
const zod_1 = require("zod");
// User validation schemas
exports.registerSchema = zod_1.z
    .object({
    name: zod_1.z.string().min(3).max(100),
    cpf: zod_1.z.string().regex(/^\d{11}$/, "CPF must be 11 digits"),
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(8),
    avatarImage: zod_1.z.any().optional(),
    role: zod_1.z.number().min(1).max(2).optional(), // 1: normal user, 2: admin user
})
    .passthrough();
exports.loginSchema = zod_1.z.object({
    cpf: zod_1.z.string().regex(/^\d{11}$/, "CPF must be 11 digits"),
    password: zod_1.z.string().min(1),
});
// Voting pool validation schemas
exports.votingOptionSchema = zod_1.z.object({
    text: zod_1.z.string().min(1),
    description: zod_1.z.string().optional(),
    image: zod_1.z.any().optional(),
});
exports.votingPoolSchema = zod_1.z
    .object({
    title: zod_1.z.string().min(3).max(100),
    description: zod_1.z.string().min(10),
    category: zod_1.z.string().min(3),
    image: zod_1.z.any().optional(),
    startDate: zod_1.z.string(),
    endDate: zod_1.z.string(),
    anonymous: zod_1.z.preprocess((val) => {
        // Handle different types of input
        if (typeof val === "string") {
            // Convert string to boolean
            return val.toLowerCase() === "true";
        }
        return Boolean(val); // Convert any other type to boolean
    }, zod_1.z.boolean().default(false)),
    options: zod_1.z.array(exports.votingOptionSchema).min(2),
    latitude: zod_1.z.number().optional(),
    longitude: zod_1.z.number().optional(),
    address: zod_1.z.string().optional(),
})
    .passthrough();
exports.updateVotingPoolSchema = zod_1.z
    .object({
    title: zod_1.z.string().min(3).max(100).optional(),
    description: zod_1.z.string().min(10).optional(),
    category: zod_1.z.string().min(3).optional(),
    image: zod_1.z.any().optional(),
    startDate: zod_1.z.string().optional(),
    endDate: zod_1.z.string().optional(),
    anonymous: zod_1.z.preprocess((val) => {
        // Handle different types of input
        if (typeof val === "string") {
            // Convert string to boolean
            return val.toLowerCase() === "true";
        }
        return Boolean(val); // Convert any other type to boolean
    }, zod_1.z.boolean().optional()),
    options: zod_1.z.array(exports.votingOptionSchema).min(2).optional(),
    status: zod_1.z.enum(["active", "upcoming", "closed"]).optional(),
    latitude: zod_1.z.number().optional(),
    longitude: zod_1.z.number().optional(),
    address: zod_1.z.string().optional(),
})
    .passthrough();
// Vote validation schema
exports.voteSchema = zod_1.z.object({
    poolId: zod_1.z.string().uuid(),
    optionId: zod_1.z.string().uuid(),
});
