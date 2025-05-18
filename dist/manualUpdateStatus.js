"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cronJobs_1 = require("./utils/cronJobs");
console.log("[MANUAL] Starting manual status update");
// Run the status update function
(0, cronJobs_1.updateVotingPoolStatuses)()
    .then(() => {
    console.log("[MANUAL] Status update completed");
    process.exit(0);
})
    .catch((error) => {
    console.error("[MANUAL] Error running status update:", error);
    process.exit(1);
});
