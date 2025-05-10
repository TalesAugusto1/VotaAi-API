import { Request, Response } from "express";
import prisma from "../utils/prisma";

// Get results for a specific pool
export const getPoolResults = async (req: Request, res: Response) => {
  const { poolId } = req.params;

  try {
    // Get the voting pool
    const pool = await prisma.votingPool.findUnique({
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
            _count: {
              select: { votes: true },
            },
          },
        },
        _count: {
          select: { votes: true },
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
  } catch (error) {
    console.error("Error fetching pool results:", error);
    return res.status(500).json({ message: "Error fetching results" });
  }
};

// Get results for all pools the user has voted in
export const getUserVotedPoolsResults = async (req: Request, res: Response) => {
  const userId = req.user.id;
  const status = req.query.status as string | undefined;

  try {
    // First, get all the pools where the user has directly voted (non-anonymous)
    const votedPools = await prisma.vote.findMany({
      where: {
        userId,
        votingPool: {
          status: status || undefined,
          anonymous: false, // Only get direct votes (non-anonymous pools)
        },
      },
      select: {
        poolId: true,
      },
      distinct: ["poolId"],
    });

    // Also get all the pools where the user has participated anonymously
    const anonymousParticipations = await prisma.votingParticipation.findMany({
      where: {
        userId,
        votingPool: {
          status: status || undefined,
          anonymous: true, // Only get participation in anonymous pools
        },
      },
      select: {
        poolId: true,
      },
    });

    // Combine unique pool IDs from both sources
    const poolIds = [
      ...votedPools.map((v) => v.poolId),
      ...anonymousParticipations.map((p) => p.poolId),
    ];

    // If no pools, return empty array
    if (poolIds.length === 0) {
      return res.status(200).json([]);
    }

    // Get results for all these pools
    const results = await Promise.all(
      poolIds.map(async (poolId) => {
        const pool = await prisma.votingPool.findUnique({
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
                _count: {
                  select: { votes: true },
                },
              },
            },
            _count: {
              select: { votes: true },
            },
          },
        });

        if (!pool) return null;

        const totalVotes = pool._count.votes;
        const optionResults = pool.options.map((option) => {
          const voteCount = option._count.votes;
          const percentage =
            totalVotes > 0 ? (voteCount / totalVotes) * 100 : 0;

          return {
            id: option.id,
            text: option.text,
            voteCount,
            percentage: Math.round(percentage * 100) / 100,
          };
        });

        // For anonymous pools, if this user participated, don't return their specific vote
        let userVote = null;
        if (!pool.anonymous) {
          // Only for non-anonymous pools, try to fetch the user's vote
          const vote = await prisma.vote.findFirst({
            where: {
              userId,
              poolId,
            },
            select: {
              optionId: true,
            },
          });
          userVote = vote?.optionId || null;
        }

        return {
          poolId: pool.id,
          title: pool.title,
          status: pool.status,
          totalVotes,
          isAnonymous: pool.anonymous,
          userVote, // Will be null for anonymous pools
          results: optionResults,
        };
      })
    );

    // Remove any nulls (in case a pool was deleted)
    const validResults = results.filter((result) => result !== null);

    return res.status(200).json(validResults);
  } catch (error) {
    console.error("Error fetching user voted pools results:", error);
    return res
      .status(500)
      .json({ message: "Error fetching user voted pools results" });
  }
};
