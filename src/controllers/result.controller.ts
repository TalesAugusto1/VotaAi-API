import { Request, Response } from "express";
import prisma from "../utils/prisma";
import { VotingOption, VotingPool } from "../../generated/prisma";
import { FetchService } from "../services/fetchService";

// Get results for a specific pool
export const getPoolResults = async (req: Request, res: Response) => {
  const params = req.params;
  const poolId = parseInt(params.poolId, 10);

  try {
    // Get the voting pool
    const pool: { id: number; title: string; anonymous: boolean; status: string; options: { id: number; description: string | null; text: string; _count?: {votes: number} }[]; _count?: {votes: number} } | null = await prisma.votingPool.findUnique({
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

    if(!pool._count) {
      return res.status(500).json({ message: "Error fetching results" });
    }
    // Calculate results
    const totalVotes = pool._count.votes;
    const results = pool.options.map((option) => {
      const voteCount = option._count!.votes;
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
    // SIMPLIFIED VERSION THAT JUST RETURNS POOL IDs
    // The client can then fetch each pool individually using the getVotingPoolById function

    // Also get all pool IDs where the user has participated anonymously
    const anonymousParticipations = await prisma.votingParticipation.findMany({
      where: {
        userId,
        votingPool: {
          status: status as "active" | "closed" | undefined,
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
  } catch (error) {
    console.error("Error fetching user voted pools results:", error);
    // Ensure we always return valid JSON
    return res.status(500).json({
      message: "Error fetching user voted pools results",
      error: error instanceof Error ? error.message : String(error),
    });
  }
};

const fetchAndAddVotes = async (pool: Partial<VotingPool> & {"_count"?: {votes: number}} & {options: Array<Omit<VotingOption, 'poolId' | 'image'>>}, totalVotes: boolean = false) => {
  const fetchService = new FetchService();
  if(!pool) return;
  const response = await fetchService.get< {
    pollId: number;
    totais: Record<string, number>;
    totalVotos: number;
    txCount: number;
  }>(`/results/${pool.id}`)

  pool.options = pool.options.map((option) => ({
    ...option,
    "_count": {
      votes: response.totais[option.id] || 0,
    }
  }));
  
  if(totalVotes) {
    pool["_count"] = {votes: response.totalVotos || 0};
  }
}