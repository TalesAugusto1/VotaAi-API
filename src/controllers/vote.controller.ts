import { Request, Response } from "express";
import prisma from "../utils/prisma";

// Submit a vote
export const submitVote = async (req: Request, res: Response) => {
  const { poolId, optionId } = req.body;
  const userId = req.user?.id;
  console.log(
    `[VOTE] Vote submission attempt - User: ${
      userId || "Anonymous"
    }, Pool: ${poolId}, Option: ${optionId}`
  );

  try {
    // Check if voting pool exists
    console.log(`[VOTE] Checking if voting pool exists - Pool ID: ${poolId}`);
    const votingPool = await prisma.votingPool.findUnique({
      where: { id: poolId },
    });

    if (!votingPool) {
      console.log(`[VOTE] Error: Voting pool not found - Pool ID: ${poolId}`);
      return res.status(404).json({ message: "Voting pool not found" });
    }
    console.log(
      `[VOTE] Voting pool found - Title: "${votingPool.title}", Status: ${votingPool.status}, Anonymous: ${votingPool.anonymous}`
    );

    // Check if voting pool is active
    if (votingPool.status !== "active") {
      console.log(
        `[VOTE] Error: Voting pool not active - Status: ${votingPool.status}`
      );
      return res
        .status(400)
        .json({ message: `Cannot vote on a ${votingPool.status} voting pool` });
    }
    console.log(`[VOTE] Voting pool is active and available for voting`);

    // Check if option exists and belongs to pool
    console.log(
      `[VOTE] Checking if option exists and belongs to pool - Option ID: ${optionId}`
    );
    const option = await prisma.votingOption.findFirst({
      where: {
        id: optionId,
        poolId,
      },
    });

    if (!option) {
      console.log(
        `[VOTE] Error: Voting option not found - Option ID: ${optionId}`
      );
      return res.status(404).json({ message: "Voting option not found" });
    }
    console.log(`[VOTE] Voting option verified - Text: "${option.text}"`);

    // If non-anonymous, check if user has already voted
    if (!votingPool.anonymous && userId) {
      console.log(
        `[VOTE] Checking if user has already voted - User ID: ${userId}`
      );
      const existingVote = await prisma.vote.findFirst({
        where: {
          poolId,
          userId,
        },
      });

      if (existingVote) {
        console.log(
          `[VOTE] Error: User has already voted - User ID: ${userId}, Previous vote: ${existingVote.id}`
        );
        return res
          .status(400)
          .json({ message: "You have already voted in this pool" });
      }
      console.log(`[VOTE] User has not voted yet in this pool`);
    } else if (votingPool.anonymous) {
      console.log(`[VOTE] Anonymous voting pool - no user check required`);
    }

    // Create vote
    console.log(`[VOTE] Creating vote record`);
    const vote = await prisma.vote.create({
      data: {
        poolId,
        optionId,
        userId: votingPool.anonymous ? null : userId,
      },
    });
    console.log(
      `[VOTE] Vote created successfully - Vote ID: ${vote.id}, User: ${
        vote.userId || "Anonymous"
      }`
    );

    return res.status(201).json({
      message: "Vote submitted successfully",
      vote,
    });
  } catch (error) {
    console.error("[VOTE] Error submitting vote:", error);
    return res.status(500).json({ message: "Error submitting vote" });
  }
};

// Get all votes for the current user
export const getUserVotes = async (req: Request, res: Response) => {
  const userId = req.user.id;
  console.log(`[VOTE] Getting all votes for user - User ID: ${userId}`);

  try {
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

    console.log(`[VOTE] Found ${votes.length} votes for user ID: ${userId}`);
    return res.status(200).json(votes);
  } catch (error) {
    console.error("[VOTE] Error fetching user votes:", error);
    return res.status(500).json({ message: "Error fetching user votes" });
  }
};

// Check if user has voted in a specific pool
export const checkUserVote = async (req: Request, res: Response) => {
  const { poolId } = req.params;
  const userId = req.user.id;
  console.log(
    `[VOTE] Checking if user has voted in pool - User ID: ${userId}, Pool ID: ${poolId}`
  );

  try {
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

    const hasVoted = !!vote;
    console.log(
      `[VOTE] User ${
        hasVoted ? "has" : "has not"
      } voted in pool - User ID: ${userId}, Pool ID: ${poolId}${
        hasVoted ? `, Option: ${vote!.optionId}` : ""
      }`
    );

    return res.status(200).json({
      hasVoted: hasVoted,
      optionId: vote?.optionId,
    });
  } catch (error) {
    console.error("[VOTE] Error checking user vote:", error);
    return res.status(500).json({ message: "Error checking user vote" });
  }
};
