"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserVotedPoolsResults = exports.getPoolResults = void 0;
const prisma_1 = __importDefault(require("../utils/prisma"));
const fetchService_1 = require("../services/fetchService");
// Get results for a specific pool
const getPoolResults = async (req, res) => {
    const params = req.params;
    const poolId = parseInt(params.poolId, 10);
    try {
        // Get the voting pool
        const pool = await prisma_1.default.votingPool.findUnique({
            where: { id: poolId },
            select: {
                id: true,
                title: true,
                status: true,
                anonymous: true,
                options: {
                    select: {
                        id: true,
                        text: true,
                        description: true,
                    },
                },
            },
        });
        if (!pool) {
            return res.status(404).json({ message: "Voting pool not found" });
        }
        // Don't return results for upcoming pools
        if (pool.status === "upcoming") {
            return res.status(400).json({
                message: "Results are not available for upcoming voting pools",
            });
        }
        await fetchAndAddVotes(pool, true);
        if (!pool._count) {
            return res.status(500).json({ message: "Error fetching results" });
        }
        // Calculate results
        const totalVotes = pool._count.votes;
        const results = pool.options.map((option) => {
            const voteCount = option._count.votes;
            const percentage = totalVotes > 0 ? (voteCount / totalVotes) * 100 : 0;
            return {
                id: option.id,
                text: option.text,
                description: option.description,
                voteCount,
                percentage: Math.round(percentage * 100) / 100, // Round to 2 decimal places
            };
        });
        return res.status(200).json({
            poolId: pool.id,
            title: pool.title,
            status: pool.status,
            isAnonymous: pool.anonymous,
            totalVotes,
            results,
        });
    }
    catch (error) {
        console.error("Error fetching pool results:", error);
        return res.status(500).json({ message: "Error fetching results" });
    }
};
exports.getPoolResults = getPoolResults;
// Get results for all pools the user has voted in
const getUserVotedPoolsResults = async (req, res) => {
    const userId = req.user.id;
    const status = req.query.status;
    try {
        // SIMPLIFIED VERSION THAT JUST RETURNS POOL IDs
        // The client can then fetch each pool individually using the getVotingPoolById function
        // Also get all pool IDs where the user has participated anonymously
        const anonymousParticipations = await prisma_1.default.votingParticipation.findMany({
            where: {
                userId,
                votingPool: {
                    status: status,
                },
            },
            select: {
                poolId: true,
            },
        });
        // Combine unique pool IDs from both sources
        const poolIds = [
            ...anonymousParticipations.map((p) => p.poolId),
        ];
        // Return simple array of objects with just the pool IDs
        const result = poolIds.map((poolId) => ({ poolId }));
        // Always return JSON, even if empty
        return res.status(200).json(result);
    }
    catch (error) {
        console.error("Error fetching user voted pools results:", error);
        // Ensure we always return valid JSON
        return res.status(500).json({
            message: "Error fetching user voted pools results",
            error: error instanceof Error ? error.message : String(error),
        });
    }
};
exports.getUserVotedPoolsResults = getUserVotedPoolsResults;
const fetchAndAddVotes = async (pool, totalVotes = false) => {
    const fetchService = new fetchService_1.FetchService();
    if (!pool)
        return;
    const response = await fetchService.get(`/results/${pool.id}`);
    pool.options = pool.options.map((option) => ({
        ...option,
        "_count": {
            votes: response.totais[option.id] || 0,
        }
    }));
    if (totalVotes) {
        pool["_count"] = { votes: response.totalVotos || 0 };
    }
};
