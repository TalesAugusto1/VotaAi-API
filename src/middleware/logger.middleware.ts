import { Request, Response, NextFunction } from "express";
import fs from "fs";
import path from "path";

// Ensure logs directory exists
const logsDir = path.join(process.cwd(), "logs");
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}

// Create log file paths
const accessLogPath = path.join(logsDir, "access.log");
const errorLogPath = path.join(logsDir, "error.log");

// Helper to format date for logging
const formatDate = (date: Date): string => {
  return date.toISOString();
};

// Helper to safely stringify objects for logging
const safeStringify = (obj: any): string => {
  try {
    // Remove sensitive data like passwords
    const sanitized = { ...obj };
    if (sanitized.password) sanitized.password = "[REDACTED]";

    return JSON.stringify(sanitized);
  } catch (error) {
    return "[Unstringifiable Object]";
  }
};

// Request logger middleware
export const requestLogger = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const startTime = new Date();
  const { method, originalUrl, ip } = req;

  // Capture the original send function
  const originalSend = res.send;

  // Override the send function to log the response
  res.send = function (body): Response {
    const endTime = new Date();
    const responseTime = endTime.getTime() - startTime.getTime();
    const statusCode = res.statusCode;

    // Format log entry
    const logEntry = {
      timestamp: formatDate(endTime),
      method,
      url: originalUrl,
      status: statusCode,
      responseTime: `${responseTime}ms`,
      ip,
      userAgent: req.headers["user-agent"] || "Unknown",
      userId: req.user?.id || "Unauthenticated",
      requestBody: method !== "GET" ? safeStringify(req.body) : undefined,
      responseBody: statusCode !== 204 ? safeStringify(body) : undefined,
    };

    // Format log message
    const logMessage = `[${logEntry.timestamp}] ${method} ${originalUrl} ${statusCode} ${responseTime}ms - ${ip} - ${logEntry.userId}`;

    // Log to console
    if (statusCode >= 400) {
      console.error(logMessage);
      // Log detailed error information to error log file
      fs.appendFileSync(errorLogPath, JSON.stringify(logEntry) + "\n");
    } else {
      console.log(logMessage);
    }

    // Log to access log file
    fs.appendFileSync(accessLogPath, JSON.stringify(logEntry) + "\n");

    // Call the original send function
    return originalSend.call(this, body);
  };

  // Log request received
  console.log(
    `[${formatDate(
      startTime
    )}] ${method} ${originalUrl} - Request received from ${ip}`
  );

  next();
};

// Error logger middleware
export const errorLogger = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { method, originalUrl, ip } = req;
  const timestamp = formatDate(new Date());

  // Format error log entry
  const errorLogEntry = {
    timestamp,
    method,
    url: originalUrl,
    ip,
    userAgent: req.headers["user-agent"] || "Unknown",
    userId: req.user?.id || "Unauthenticated",
    error: {
      message: err.message,
      stack: err.stack,
      statusCode: err.statusCode || 500,
      name: err.name,
    },
  };

  // Log to console and error log file
  console.error(
    `[${timestamp}] ERROR: ${method} ${originalUrl} - ${err.message}`
  );
  fs.appendFileSync(errorLogPath, JSON.stringify(errorLogEntry) + "\n");

  next(err);
};
