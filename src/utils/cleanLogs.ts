import fs from "fs";
import path from "path";

// Maximum age for log backup files (7 days in milliseconds)
const MAX_LOG_AGE = 7 * 24 * 60 * 60 * 1000;

/**
 * Clean up old log backup files
 * This function deletes log backup files older than MAX_LOG_AGE
 */
export function cleanupOldLogFiles(): void {
  try {
    const logsDir = path.join(process.cwd(), "logs");

    // Check if logs directory exists
    if (!fs.existsSync(logsDir)) {
      console.log("Logs directory does not exist, nothing to clean up");
      return;
    }

    // Get list of files in logs directory
    const files = fs.readdirSync(logsDir);
    const now = Date.now();
    let deletedCount = 0;
    let deletedSize = 0;

    // Process each file
    files.forEach((file) => {
      // Only process backup log files (files with .bak extension)
      if (file.endsWith(".bak")) {
        const filePath = path.join(logsDir, file);

        try {
          // Get file stats
          const stats = fs.statSync(filePath);

          // Check file age based on timestamp in filename
          // Extract timestamp (assuming format filename.timestamp.bak)
          const matches = file.match(/\.(\d+)\.bak$/);

          if (matches && matches[1]) {
            const fileTimestamp = parseInt(matches[1], 10);
            const fileAge = now - fileTimestamp;

            // Delete file if it's older than MAX_LOG_AGE
            if (fileAge > MAX_LOG_AGE) {
              const fileSize = stats.size;
              fs.unlinkSync(filePath);
              deletedCount++;
              deletedSize += fileSize;
              console.log(`Deleted old log file: ${filePath}`);
            }
          }
        } catch (error: any) {
          console.error(`Error processing log file ${file}: ${error.message}`);
        }
      }
    });

    // Log summary
    if (deletedCount > 0) {
      console.log(
        `Cleaned up ${deletedCount} old log files, freed ${
          Math.round((deletedSize / 1024 / 1024) * 100) / 100
        } MB of disk space`
      );
    } else {
      console.log("No old log files to clean up");
    }
  } catch (error: any) {
    console.error(`Error cleaning up log files: ${error.message}`);
  }
}

// Export a function to set up periodic cleanup
export function setupLogCleanup(intervalHours = 24): NodeJS.Timer {
  console.log(`Setting up log cleanup to run every ${intervalHours} hours`);

  // Run cleanup immediately
  cleanupOldLogFiles();

  // Set up interval for future cleanups
  return setInterval(() => {
    console.log("Running scheduled log cleanup");
    cleanupOldLogFiles();
  }, intervalHours * 60 * 60 * 1000);
}
