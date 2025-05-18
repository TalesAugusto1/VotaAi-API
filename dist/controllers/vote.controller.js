"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserVotes = exports.checkUserVote = exports.submitVote = void 0;
const prisma_1 = __importDefault(require("../utils/prisma"));
const fetchService_1 = require("../services/fetchService");
// Submit a vote
const submitVote = async (req, res) => {
    const fetchService = new fetchService_1.FetchService();
    const { poolId, optionId } = req.body;
    const userId = req.user?.id;
    console.log(`[VOTE] Vote submission attempt - User: ${userId || "Anonymous"}, Pool: ${poolId}, Option: ${optionId}`);
    try {
        // Check if voting pool exists
        console.log(`[VOTE] Checking if voting pool exists - Pool ID: ${poolId}`);
        const votingPool = await prisma_1.default.votingPool.findUnique({
            where: { id: poolId },
        });
        if (!votingPool) {
            console.log(`[VOTE] Error: Voting pool not found - Pool ID: ${poolId}`);
            return res.status(404).json({ message: "Voting pool not found" });
        }
        console.log(`[VOTE] Voting pool found - Title: "${votingPool.title}", Status: ${votingPool.status}, Anonymous: ${votingPool.anonymous}`);
        // Check if voting pool is active
        if (votingPool.status !== "active") {
            console.log(`[VOTE] Error: Voting pool not active - Status: ${votingPool.status}`);
            return res
                .status(400)
                .json({ message: `Cannot vote on a ${votingPool.status} voting pool` });
        }
        console.log(`[VOTE] Voting pool is active and available for voting`);
        // Check if option exists and belongs to pool
        console.log(`[VOTE] Checking if option exists and belongs to pool - Option ID: ${optionId}`);
        const option = await prisma_1.default.votingOption.findFirst({
            where: {
                id: optionId,
                poolId,
            },
        });
        if (!option) {
            console.log(`[VOTE] Error: Voting option not found - Option ID: ${optionId}`);
            return res.status(404).json({ message: "Voting option not found" });
        }
        console.log(`[VOTE] Voting option verified - Text: "${option.text}"`);
        // Check if user has already voted - regardless of anonymous or not
        if (userId) {
            console.log(`[VOTE] Checking if user has already voted - User ID: ${userId}`);
            const existingParticipation = await prisma_1.default.votingParticipation.findFirst({
                where: {
                    poolId,
                    userId,
                },
            });
            if (existingParticipation) {
                console.log(`[VOTE] Error: User has already participated in anonymous pool - User ID: ${userId}, Participation ID: ${existingParticipation.id}`);
                return res
                    .status(400)
                    .json({ message: "You have already voted in this pool" });
            }
            console.log(`[VOTE] User has not voted yet in this pool`);
        }
        else {
            console.log(`[VOTE] Warning: No user ID provided. This should not happen.`);
            return res
                .status(401)
                .json({ message: "Authentication required to vote" });
        }
        // Begin transaction to handle vote and participation tracking
        const voteResult = await prisma_1.default.$transaction(async (tx) => {
            let voteRecord;
            // For anonymous voting
            console.log(`[VOTE] Anonymous voting - creating anonymous vote record`);
            // Create vote
            const result = await fetchService.post('vote', { poolId, option: optionId });
            voteRecord = result.tx_hash;
            // Track participation without revealing the choice
            await tx.votingParticipation.create({
                data: {
                    poolId,
                    userId, // Keep track that this user participated
                },
            });
            console.log(`[VOTE] Created anonymous vote and participation record`);
            return voteRecord;
        });
        console.log(`[VOTE] Vote created successfully - Vote hash: ${voteResult} "Anonymous"
      }`);
        return res.status(201).json({
            message: "Vote submitted successfully",
            vote: voteResult,
        });
    }
    catch (error) {
        console.error("[VOTE] Error submitting vote:", error);
        return res.status(500).json({ message: "Error submitting vote" });
    }
};
exports.submitVote = submitVote;
// Check if user has voted in a specific pool
const checkUserVote = async (req, res) => {
    const params = req.params;
    const poolId = parseInt(params.poolId, 10);
    const userId = req.user.id;
    console.log(`[VOTE] Checking if user has voted in pool - User ID: ${userId}, Pool ID: ${poolId}`);
    try {
        // Get pool to check if it's anonymous
        const pool = await prisma_1.default.votingPool.findUnique({
            where: { id: poolId },
            select: { anonymous: true },
        });
        if (!pool) {
            console.log(`[VOTE] Error: Pool not found - Pool ID: ${poolId}`);
            return res.status(404).json({ message: "Voting pool not found" });
        }
        let hasVoted = false;
        let optionId = null;
        const participation = await prisma_1.default.votingParticipation.findFirst({
            where: {
                poolId,
                userId,
            },
            select: {
                id: true,
            },
        });
        hasVoted = !!participation;
        console.log(`[VOTE] Anonymous pool: User ${hasVoted ? "has" : "has not"} participated in pool - User ID: ${userId}, Pool ID: ${poolId}`);
        return res.status(200).json({
            hasVoted,
            optionId,
            isAnonymous: pool.anonymous,
        });
    }
    catch (error) {
        console.error("[VOTE] Error checking user vote:", error);
        return res.status(500).json({ message: "Error checking user vote" });
    }
};
exports.checkUserVote = checkUserVote;
const getUserVotes = async (userId) => {
    const data = await prisma_1.default.votingParticipation.findMany({
        where: { userId },
        orderBy: { timestamp: "desc" },
        select: {
            id: true,
            poolId: true,
            userId: true,
            timestamp: true,
        }
    });
    return { anonymousParticipation: data };
};
exports.getUserVotes = getUserVotes;
