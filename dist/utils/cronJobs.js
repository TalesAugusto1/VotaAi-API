"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initCronJobs = exports.updateVotingPoolStatuses = void 0;
const prisma_1 = __importDefault(require("./prisma"));
const node_cron_1 = __importDefault(require("node-cron"));
// Function to update voting pool statuses
const updateVotingPoolStatuses = async () => {
    try {
        const now = new Date();
        console.log(`[CRON] Running voting pool status update at ${now.toISOString()}`);
        // Get all pools before update for logging
        const beforePools = await prisma_1.default.votingPool.findMany({
            select: {
                id: true,
                title: true,
                status: true,
                startDate: true,
                endDate: true,
            },
        });
        console.log(`[CRON] Found ${beforePools.length} total pools before update`);
        const activeCount = beforePools.filter((p) => p.status === "active").length;
        const upcomingCount = beforePools.filter((p) => p.status === "upcoming").length;
        const closedCount = beforePools.filter((p) => p.status === "closed").length;
        console.log(`[CRON] Current status counts - Active: ${activeCount}, Upcoming: ${upcomingCount}, Closed: ${closedCount}`);
        // Update pools that should be active (start date passed but end date not reached)
        const activateResult = await prisma_1.default.votingPool.updateMany({
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
        const closeResult = await prisma_1.default.votingPool.updateMany({
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
        console.log(`[CRON] Updated pools - Changed to active: ${activateResult.count}, Changed to closed: ${closeResult.count}`);
        // Get pools after update for confirmation
        if (activateResult.count > 0 || closeResult.count > 0) {
            const afterPools = await prisma_1.default.votingPool.findMany({
                select: { id: true, title: true, status: true },
            });
            const newActiveCount = afterPools.filter((p) => p.status === "active").length;
            const newUpcomingCount = afterPools.filter((p) => p.status === "upcoming").length;
            const newClosedCount = afterPools.filter((p) => p.status === "closed").length;
            console.log(`[CRON] New status counts - Active: ${newActiveCount}, Upcoming: ${newUpcomingCount}, Closed: ${newClosedCount}`);
        }
        console.log("[CRON] Voting pool status update completed successfully");
    }
    catch (error) {
        console.error("[CRON] Error updating voting pool statuses:", error);
    }
};
exports.updateVotingPoolStatuses = updateVotingPoolStatuses;
// Export a function that can be called from server.ts
const initCronJobs = () => {
    console.log("[CRON] Initializing scheduled jobs");
    // Use node-cron to schedule jobs with proper cron syntax
    // This runs every hour at minute 0
    node_cron_1.default.schedule("0 * * * *", exports.updateVotingPoolStatuses, {
        timezone: "UTC",
    });
    console.log("[CRON] Status update job scheduled to run hourly");
    // Run once at startup
    console.log("[CRON] Running initial status update");
    (0, exports.updateVotingPoolStatuses)();
};
exports.initCronJobs = initCronJobs;
