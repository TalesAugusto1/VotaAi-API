"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const vote_controller_1 = require("../controllers/vote.controller");
const validation_middleware_1 = require("../middleware/validation.middleware");
const schemas_1 = require("../validation/schemas");
const auth_middleware_1 = require("../middleware/auth.middleware");
const router = (0, express_1.Router)();
// Submit a vote
router.post("/", auth_middleware_1.authMiddleware, (0, validation_middleware_1.validate)(schemas_1.voteSchema), vote_controller_1.submitVote);
// Get all votes for the current user
router.get("/user", auth_middleware_1.authMiddleware, vote_controller_1.getUserVotes);
// Check if user has voted in a specific pool
router.get("/user/pools/:poolId", auth_middleware_1.authMiddleware, vote_controller_1.checkUserVote);
exports.default = router;
