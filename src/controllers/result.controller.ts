import { Request, Response } from "express";
import prisma from "../utils/prisma";

// Get results for a specific voting pool
export const getPoolResults = async (req: Request, res: Response) => {
  try {
    const { poolId } = req.params;

    // Check if pool exists
    const pool = await prisma.votingPool.findUnique({
      where: { id: poolId },
      include: {
        options: {
          select: {
            id: true,
            text: true,
            description: true,
            imageUrl: true,
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

    // Calculate percentages
    const totalVotes = pool._count.votes;
    const results = pool.options.map((option) => {
      const voteCount = option._count.votes;
      const percentage = totalVotes > 0 ? (voteCount / totalVotes) * 100 : 0;

      return {
        ...option,
        voteCount,
        percentage: Math.round(percentage * 100) / 100, // Round to 2 decimal places
      };
    });

    // Sort by votes (descending)
    results.sort((a, b) => b.voteCount - a.voteCount);

    return res.status(200).json({
      poolId: pool.id,
      title: pool.title,
      totalVotes,
      results,
    });
  } catch (error) {
    console.error("Error fetching results:", error);
    return res.status(500).json({ message: "Error fetching results" });
  }
};

// Get results for all pools the user has voted in
export const getUserPoolResults = async (req: Request, res: Response) => {
  try {
    const userId = req.user.id;
    const { status } = req.query;

    // Get all pools user has voted in
    const votes = await prisma.vote.findMany({
      where: { userId },
      select: { poolId: true },
    });

    const poolIds = [...new Set(votes.map((vote) => vote.poolId))];

    // Get results for each pool
    const poolsResults = await Promise.all(
      poolIds.map(async (poolId) => {
        const pool = await prisma.votingPool.findUnique({
          where: {
            id: poolId,
            ...(status ? { status: status as string } : {}),
          },
          include: {
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

        // Calculate percentages
        const totalVotes = pool._count.votes;
        const results = pool.options.map((option) => {
          const voteCount = option._count.votes;
          const percentage =
            totalVotes > 0 ? (voteCount / totalVotes) * 100 : 0;

          return {
            ...option,
            voteCount,
            percentage: Math.round(percentage * 100) / 100,
          };
        });

        // Sort by votes (descending)
        results.sort((a, b) => b.voteCount - a.voteCount);

        return {
          poolId: pool.id,
          title: pool.title,
          status: pool.status,
          totalVotes,
          results,
        };
      })
    );

    // Filter out null results (might happen if pool was deleted or doesn't match status filter)
    const filteredResults = poolsResults.filter((result) => result !== null);

    return res.status(200).json(filteredResults);
  } catch (error) {
    console.error("Error fetching user pool results:", error);
    return res
      .status(500)
      .json({ message: "Error fetching user pool results" });
  }
};
