"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_rate_limit_1 = require("express-rate-limit");
// Routes
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const votingPool_routes_1 = __importDefault(require("./routes/votingPool.routes"));
const vote_routes_1 = __importDefault(require("./routes/vote.routes"));
const result_routes_1 = __importDefault(require("./routes/result.routes"));
// Utilities
const cronJobs_1 = require("./utils/cronJobs");
// Logger middleware
const logger_middleware_1 = require("./middleware/logger.middleware");
// Import for swagger documentation - temporarily commented out as the module doesn't exist yet
// import { setupSwagger } from "./config/swagger";
// Load environment variables
dotenv_1.default.config();
if (!process.env.BLOCKCHAIN_API_URL) {
    console.error("[BOOT] BLOCKCHAIN_API_URL is not defined in .env. API will not start.");
    process.exit(1);
}
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Middleware
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)({
    origin: process.env.FRONTEND_URL || "*",
    credentials: true,
}));
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
// Add request logger middleware
app.use(logger_middleware_1.requestLogger);
// Rate limiting
const limiter = (0, express_rate_limit_1.rateLimit)({
    windowMs: 15 * 60 * 1000, // 15 minutes
    limit: 1000, // 1000 requests per window
    standardHeaders: true,
    legacyHeaders: false,
});
// More generous rate limit for auth endpoints that are frequently called
const authLimiter = (0, express_rate_limit_1.rateLimit)({
    windowMs: 5 * 60 * 1000, // 5 minutes
    limit: 1500, // 1500 requests per 5-minute window
    standardHeaders: true,
    legacyHeaders: false,
});
// Apply the general rate limiter to all routes
app.use(limiter);
// Apply the more generous rate limiter specifically to the /me endpoint
// which is called frequently to check user authentication
app.use("/api/auth/me", authLimiter);
// Log startup message
console.log(`[${new Date().toISOString()}] Starting VotaAí API...`);
// Routes
app.use("/api/auth", auth_routes_1.default);
app.use("/api/voting-pools", votingPool_routes_1.default);
app.use("/api/votes", vote_routes_1.default);
app.use("/api/results", result_routes_1.default);
// Health check endpoint
app.get("/health", (req, res) => {
    res.status(200).json({ status: "ok" });
});
// Add error logger middleware
app.use(logger_middleware_1.errorLogger);
// Error handling middleware
app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).json({
        message: err.message || "Internal Server Error",
        stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
    });
});
// Start the server
app.listen(PORT, () => {
    console.log(`[${new Date().toISOString()}] Server running on port ${PORT}`);
    console.log(`[${new Date().toISOString()}] API logs available in the 'logs' directory`);
    console.log(`[${new Date().toISOString()}] Swagger docs available at http://localhost:${PORT}/api-docs`);
    // Initialize cron jobs
    (0, cronJobs_1.initCronJobs)();
});
exports.default = app;
