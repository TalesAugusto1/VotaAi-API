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

    // Check if user has already voted - regardless of anonymous or not
    if (userId) {
      console.log(
        `[VOTE] Checking if user has already voted - User ID: ${userId}`
      );

      // For regular votes, check the Vote table
      if (!votingPool.anonymous) {
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
      }
      // For anonymous votes, check the participation table
      else {
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
      if (votingPool.anonymous) {
        console.log(`[VOTE] Anonymous voting - creating anonymous vote record`);

        // Create anonymous vote (no userId)
        voteRecord = await tx.vote.create({
          data: {
            poolId,
            optionId,
            userId: null, // Anonymous vote
          },
        });

        // Track participation without revealing the choice
        await tx.votingParticipation.create({
          data: {
            poolId,
            userId, // Keep track that this user participated
          },
        });
        console.log(`[VOTE] Created anonymous vote and participation record`);
      }
      // For regular voting
      else {
        console.log(
          `[VOTE] Regular voting - creating vote record with user ID`
        );

        // Create regular vote with userId
        voteRecord = await tx.vote.create({
          data: {
            poolId,
            optionId,
            userId, // Regular vote linked to user
          },
        });
        console.log(`[VOTE] Created regular vote record with user ID`);
      }

      return voteRecord;
    });

    console.log(
      `[VOTE] Vote created successfully - Vote ID: ${voteResult.id}, User: ${
        voteResult.userId || "Anonymous"
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

// Get all votes for the current user
export const getUserVotes = async (req: Request, res: Response) => {
  const userId = req.user.id;
  console.log(`[VOTE] Getting all votes for user - User ID: ${userId}`);

  try {
    // Get non-anonymous votes directly
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
            anonymous: true,
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

    // Get anonymous voting pools the user has participated in
    const anonymousParticipation = await prisma.votingParticipation.findMany({
      where: {
        userId,
      },
      include: {
        votingPool: {
          select: {
            id: true,
            title: true,
            status: true,
            anonymous: true,
          },
        },
      },
    });

    // Transform the anonymous participations into vote-like objects
    // but without revealing the specific option chosen
    const anonymousVotes = anonymousParticipation.map((participation) => ({
      id: participation.id,
      timestamp: participation.timestamp,
      userId: participation.userId,
      poolId: participation.poolId,
      votingPool: participation.votingPool,
      isAnonymous: true,
      // Note: We don't include optionId or option details to maintain anonymity
    }));

    console.log(
      `[VOTE] Found ${votes.length} direct votes and ${anonymousVotes.length} anonymous participations for user ID: ${userId}`
    );

    return res.status(200).json({
      regularVotes: votes,
      anonymousParticipation: anonymousVotes,
    });
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

    // For non-anonymous pools, check for vote and return the option chosen
    if (!pool.anonymous) {
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

      hasVoted = !!vote;
      optionId = vote?.optionId || null;

      console.log(
        `[VOTE] Regular pool: User ${
          hasVoted ? "has" : "has not"
        } voted in pool - User ID: ${userId}, Pool ID: ${poolId}${
          hasVoted ? `, Option: ${optionId}` : ""
        }`
      );
    }
    // For anonymous pools, only check participation, not the option
    else {
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
    }

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
