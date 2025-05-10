import { Router } from "express";
import {
  submitVote,
  getUserVotes,
  checkUserVote,
} from "../controllers/vote.controller";
import { validate } from "../middleware/validation.middleware";
import { voteSchema } from "../validation/schemas";
import { authMiddleware } from "../middleware/auth.middleware";

const router = Router();

// Submit a vote
router.post("/", authMiddleware, validate(voteSchema), submitVote);

// Get all votes for the current user
router.get("/user", authMiddleware, getUserVotes);

// Check if user has voted in a specific pool
router.get("/user/pools/:poolId", authMiddleware, checkUserVote);

export default router;
