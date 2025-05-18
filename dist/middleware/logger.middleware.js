"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorLogger = exports.requestLogger = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
// Maximum log file size (10MB)
const MAX_LOG_SIZE = 10 * 1024 * 1024;
// Ensure logs directory exists
const logsDir = path_1.default.join(process.cwd(), "logs");
if (!fs_1.default.existsSync(logsDir)) {
    fs_1.default.mkdirSync(logsDir);
}
// Create log file paths
const accessLogPath = path_1.default.join(logsDir, "access.log");
const errorLogPath = path_1.default.join(logsDir, "error.log");
// Helper to format date for logging
const formatDate = (date) => {
    return date.toISOString();
};
// Helper to safely stringify objects for logging
const safeStringify = (obj) => {
    try {
        // Remove sensitive data like passwords
        const sanitized = { ...obj };
        if (sanitized.password)
            sanitized.password = "[REDACTED]";
        return JSON.stringify(sanitized);
    }
    catch (error) {
        return "[Unstringifiable Object]";
    }
};
// Safe file append function that won't crash the server if disk is full
const safeAppendFile = (filePath, data) => {
    try {
        // Check if log file exists and is too large
        if (fs_1.default.existsSync(filePath)) {
            const stats = fs_1.default.statSync(filePath);
            // If file is larger than max size, rotate it (rename old log and start new one)
            if (stats.size > MAX_LOG_SIZE) {
                const backupPath = `${filePath}.${Date.now()}.bak`;
                try {
                    fs_1.default.renameSync(filePath, backupPath);
                    console.log(`Rotated log file ${filePath} to ${backupPath}`);
                }
                catch (error) {
                    console.error(`Failed to rotate log file: ${error.message}`);
                    // Continue with append even if rotation fails
                }
            }
        }
        // Append to file
        fs_1.default.appendFileSync(filePath, data);
    }
    catch (error) {
        // Don't let logging errors crash the server
        console.error(`Failed to write to log file ${filePath}: ${error.message}`);
    }
};
// Request logger middleware
const requestLogger = (req, res, next) => {
    const startTime = new Date();
    const { method, originalUrl, ip } = req;
    // Capture the original send function
    const originalSend = res.send;
    // Override the send function to log the response
    res.send = function (body) {
        const endTime = new Date();
        const responseTime = endTime.getTime() - startTime.getTime();
        const statusCode = res.statusCode;
        // Format log message
        const logMessage = `[${formatDate(endTime)}] ${method} ${originalUrl} ${statusCode} ${responseTime}ms - ${ip} - ${req.user?.id || "Unauthenticated"}`;
        // Log to console only
        if (statusCode >= 400) {
            console.error(logMessage);
        }
        else {
            console.log(logMessage);
        }
        // Call the original send function
        return originalSend.call(this, body);
    };
    // Log request received
    console.log(`[${formatDate(startTime)}] ${method} ${originalUrl} - Request received from ${ip}`);
    next();
};
exports.requestLogger = requestLogger;
// Error logger middleware
const errorLogger = (err, req, res, next) => {
    const { method, originalUrl, ip } = req;
    const timestamp = formatDate(new Date());
    // Log to console only
    console.error(`[${timestamp}] ERROR: ${method} ${originalUrl} - ${err.message}`);
    next(err);
};
exports.errorLogger = errorLogger;
