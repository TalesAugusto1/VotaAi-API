import { Router } from "express";
import {
  getPoolResults,
  getUserVotedPoolsResults,
} from "../controllers/result.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const router = Router();

// Get results for a specific pool (public)
router.get("/pools/:poolId", getPoolResults);

// Get results for all pools the user has voted in - FIX THE ROUTE PATH
router.get("/user-voted", authMiddleware, getUserVotedPoolsResults);

export default router;
