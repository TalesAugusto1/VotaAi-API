import { Request, Response } from "express";
import prisma from "../utils/prisma";

// Submit a vote
export const submitVote = async (req: Request, res: Response) => {
  try {
    const { poolId, optionId } = req.body;
    const userId = req.user?.id;

    // Check if voting pool exists
    const votingPool = await prisma.votingPool.findUnique({
      where: { id: poolId },
    });

    if (!votingPool) {
      return res.status(404).json({ message: "Voting pool not found" });
    }

    // Check if voting pool is active
    if (votingPool.status !== "active") {
      return res
        .status(400)
        .json({ message: `Cannot vote on a ${votingPool.status} voting pool` });
    }

    // Check if option exists and belongs to pool
    const option = await prisma.votingOption.findFirst({
      where: {
        id: optionId,
        poolId,
      },
    });

    if (!option) {
      return res.status(404).json({ message: "Voting option not found" });
    }

    // If non-anonymous, check if user has already voted
    if (!votingPool.anonymous && userId) {
      const existingVote = await prisma.vote.findFirst({
        where: {
          poolId,
          userId,
        },
      });

      if (existingVote) {
        return res
          .status(400)
          .json({ message: "You have already voted in this pool" });
      }
    }

    // Create vote
    const vote = await prisma.vote.create({
      data: {
        poolId,
        optionId,
        userId: votingPool.anonymous ? null : userId,
      },
    });

    return res.status(201).json({
      message: "Vote submitted successfully",
      vote,
    });
  } catch (error) {
    console.error("Error submitting vote:", error);
    return res.status(500).json({ message: "Error submitting vote" });
  }
};

// Get all votes for the current user
export const getUserVotes = async (req: Request, res: Response) => {
  try {
    const userId = req.user.id;

    const votes = await prisma.vote.findMany({
      where: {
        userId,
      },
      include: {
        votingPool: {
          select: {
            id: true,
            title: true,
            status: true,
          },
        },
        option: {
          select: {
            id: true,
            text: true,
          },
        },
      },
    });

    return res.status(200).json(votes);
  } catch (error) {
    console.error("Error fetching user votes:", error);
    return res.status(500).json({ message: "Error fetching user votes" });
  }
};

// Check if user has voted in a specific pool
export const checkUserVote = async (req: Request, res: Response) => {
  try {
    const { poolId } = req.params;
    const userId = req.user.id;

    const vote = await prisma.vote.findFirst({
      where: {
        poolId,
        userId,
      },
      select: {
        id: true,
        optionId: true,
      },
    });

    return res.status(200).json({
      hasVoted: !!vote,
      optionId: vote?.optionId,
    });
  } catch (error) {
    console.error("Error checking user vote:", error);
    return res.status(500).json({ message: "Error checking user vote" });
  }
};
