"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.manualUpdatePoolStatuses = void 0;
exports.startScheduler = startScheduler;
const client_1 = require("@prisma/client");
const node_cron_1 = __importDefault(require("node-cron"));
const prisma = new client_1.PrismaClient();
/**
 * Updates the status of all voting pools based on their start and end dates
 */
async function updatePoolStatuses() {
    console.log("[SCHEDULER] Running automatic voting pool status update");
    const now = new Date();
    try {
        // Get all pools
        const pools = await prisma.votingPool.findMany({
            select: {
                id: true,
                status: true,
                startDate: true,
                endDate: true,
            },
        });
        console.log(`[SCHEDULER] Found ${pools.length} pools to check status`);
        // Check and update each pool's status
        for (const pool of pools) {
            const startDate = new Date(pool.startDate);
            const endDate = new Date(pool.endDate);
            let newStatus = pool.status;
            // Determine the correct status based on dates
            if (now >= endDate && pool.status !== "closed") {
                newStatus = "closed";
            }
            else if (now >= startDate &&
                now < endDate &&
                pool.status !== "active") {
                newStatus = "active";
            }
            else if (now < startDate && pool.status !== "upcoming") {
                newStatus = "upcoming";
            }
            // If status needs to be updated
            if (newStatus !== pool.status) {
                console.log(`[SCHEDULER] Updating pool ${pool.id} status from ${pool.status} to ${newStatus}`);
                await prisma.votingPool.update({
                    where: { id: pool.id },
                    data: { status: newStatus },
                });
            }
        }
        console.log("[SCHEDULER] Pool status update completed");
    }
    catch (error) {
        console.error("[SCHEDULER] Error updating pool statuses:", error);
    }
}
/**
 * Starts the scheduler for periodic tasks
 */
function startScheduler() {
    // Run the status update every hour
    node_cron_1.default.schedule("0 * * * *", () => {
        updatePoolStatuses().catch((err) => {
            console.error("[SCHEDULER] Scheduled task error:", err);
        });
    });
    console.log("[SCHEDULER] Started scheduler - Pool status will update hourly");
    // Run an initial update on startup
    updatePoolStatuses().catch((err) => {
        console.error("[SCHEDULER] Initial status update error:", err);
    });
}
// Export the manual run function for testing
exports.manualUpdatePoolStatuses = updatePoolStatuses;
