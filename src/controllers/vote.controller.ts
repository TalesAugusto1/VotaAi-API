import { Request, Response } from "express";
import prisma from "../utils/prisma";
import { FetchService } from "../services/fetchService";
import { ServerResponse } from "http";
import { VotingParticipation } from "../../generated/prisma";
import { parse } from "path";

// Submit a vote
export const submitVote = async (req: Request, res: Response) => {
  const fetchService = new FetchService();
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

    // Check if user has already voted - regardless of anonymous or not
    if (userId) {
      console.log(
        `[VOTE] Checking if user has already voted - User ID: ${userId}`
      );

        const existingParticipation =
          await prisma.votingParticipation.findFirst({
            where: {
              poolId,
              userId,
            },
          });

        if (existingParticipation) {
          console.log(
            `[VOTE] Error: User has already participated in anonymous pool - User ID: ${userId}, Participation ID: ${existingParticipation.id}`
          );
          return res
            .status(400)
            .json({ message: "You have already voted in this pool" });
        }
      
      console.log(`[VOTE] User has not voted yet in this pool`);
    } else {
      console.log(
        `[VOTE] Warning: No user ID provided. This should not happen.`
      );
      return res
        .status(401)
        .json({ message: "Authentication required to vote" });
    }

    // Begin transaction to handle vote and participation tracking
    const voteResult = await prisma.$transaction(async (tx) => {
      let voteRecord;

      // For anonymous voting
      console.log(`[VOTE] Anonymous voting - creating anonymous vote record`);

      // Create vote

      const result = await fetchService.post<{tx_hash: string}>('/vote', {pollId:poolId, option: String(optionId)})

      voteRecord = result.tx_hash

      // Track participation without revealing the choice
      await tx.votingParticipation.create({
        data: {
          poolId,
          userId,
        },
      });
      console.log(`[VOTE] Created anonymous vote and participation record`);

      return voteRecord;
    }, {timeout: 15000, maxWait: 15000});

    console.log(
      `[VOTE] Vote created successfully - Vote hash: ${voteResult} "Anonymous"
      }`
    );

    return res.status(201).json({
      message: "Vote submitted successfully",
      vote: voteResult,
    });
  } catch (error) {
    console.error("[VOTE] Error submitting vote:", error);
    return res.status(500).json({ message: "Error submitting vote" });
  }
};

// Check if user has voted in a specific pool
export const checkUserVote = async (req: Request, res: Response) => {
  const params = req.params;
  const poolId = parseInt(params.poolId, 10);
  const userId = req.user.id;
  console.log(
    `[VOTE] Checking if user has voted in pool - User ID: ${userId}, Pool ID: ${poolId}`
  );

  try {
    // Get pool to check if it's anonymous
    const pool = await prisma.votingPool.findUnique({
      where: { id: poolId },
      select: { anonymous: true },
    });

    if (!pool) {
      console.log(`[VOTE] Error: Pool not found - Pool ID: ${poolId}`);
      return res.status(404).json({ message: "Voting pool not found" });
    }

    let hasVoted = false;
    let optionId = null;

    const participation = await prisma.votingParticipation.findFirst({
      where: {
        poolId,
        userId,
      },
      select: {
        id: true,
      },
    });

    hasVoted = !!participation;

    console.log(
      `[VOTE] Anonymous pool: User ${
        hasVoted ? "has" : "has not"
      } participated in pool - User ID: ${userId}, Pool ID: ${poolId}`
    );
    

    return res.status(200).json({
      hasVoted,
      optionId,
      isAnonymous: pool.anonymous,
    });
  } catch (error) {
    console.error("[VOTE] Error checking user vote:", error);
    return res.status(500).json({ message: "Error checking user vote" });
  }
};

export const getUserVotes = async (req: Request, res: Response) => {
  try {
    const query = req.query;
    const userId = parseInt(query.userId as string, 10);

    if (isNaN(userId)) {
      return res.status(400).json({ message: "Invalid userId" });
    }

    const data = await prisma.votingParticipation.findMany({
      where: { userId },
      orderBy: { timestamp: "desc" },
      select: {
        id: true,
        poolId: true,
        userId: true,
        timestamp: true,
      },
    });

    console.log({data})

    return res.status(200).json({ anonymousParticipation: data });
  } catch (error) {
    console.error("[VOTE] Error fetching user votes:", error);
    console.error(error)
    return res.status(500).json({ message: "Error fetching user votes" });
  }
};