import prisma from "./prisma";

// Function to update voting pool statuses
export const updateVotingPoolStatuses = async () => {
  try {
    const now = new Date();

    // Update pools that should be active (start date passed but end date not reached)
    await prisma.votingPool.updateMany({
      where: {
        status: "upcoming",
        startDate: {
          lte: now,
        },
        endDate: {
          gt: now,
        },
      },
      data: {
        status: "active",
      },
    });

    // Update pools that should be closed (end date passed)
    await prisma.votingPool.updateMany({
      where: {
        status: {
          not: "closed",
        },
        endDate: {
          lte: now,
        },
      },
      data: {
        status: "closed",
      },
    });

    console.log("Voting pool statuses updated successfully");
  } catch (error) {
    console.error("Error updating voting pool statuses:", error);
  }
};

// Export a function that can be called from server.ts
export const initCronJobs = () => {
  // Initialize the cron jobs
  // This simple implementation runs the status update every hour
  // In a production app, you would use a proper cron library like node-cron
  setInterval(updateVotingPoolStatuses, 60 * 60 * 1000); // Run every hour

  // Run once at startup
  updateVotingPoolStatuses();
};
