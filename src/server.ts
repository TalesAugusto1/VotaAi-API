import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { rateLimit } from "express-rate-limit";

// Routes
import authRoutes from "./routes/auth.routes";
import votingPoolRoutes from "./routes/votingPool.routes";
import voteRoutes from "./routes/vote.routes";
import resultRoutes from "./routes/result.routes";

// Utilities
import { initCronJobs } from "./utils/cronJobs";
// Logger middleware
import { requestLogger, errorLogger } from "./middleware/logger.middleware";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "*",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// Add request logger middleware
app.use(requestLogger);

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 100, // Limit each IP to 100 requests per window
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(limiter);

// Log startup message
console.log(`[${new Date().toISOString()}] Starting VotaAí API...`);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/voting-pools", votingPoolRoutes);
app.use("/api/votes", voteRoutes);
app.use("/api/results", resultRoutes);

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

// Add error logger middleware
app.use(errorLogger);

// Error handling middleware
app.use(
  (
    err: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.status(err.statusCode || 500).json({
      message: err.message || "Internal Server Error",
      stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
    });
  }
);

app.listen(PORT, () => {
  console.log(`[${new Date().toISOString()}] Server running on port ${PORT}`);
  console.log(
    `[${new Date().toISOString()}] API logs available in the 'logs' directory`
  );

  // Initialize cron jobs
  initCronJobs();
});

export default app;
