import { updateVotingPoolStatuses } from "./utils/cronJobs";

console.log("[MANUAL] Starting manual status update");

// Run the status update function
updateVotingPoolStatuses()
  .then(() => {
    console.log("[MANUAL] Status update completed");
    process.exit(0);
  })
  .catch((error) => {
    console.error("[MANUAL] Error running status update:", error);
    process.exit(1);
  });
