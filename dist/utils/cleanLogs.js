"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanupOldLogFiles = cleanupOldLogFiles;
exports.setupLogCleanup = setupLogCleanup;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
// Maximum age for log backup files (7 days in milliseconds)
const MAX_LOG_AGE = 7 * 24 * 60 * 60 * 1000;
/**
 * Clean up old log backup files
 * This function deletes log backup files older than MAX_LOG_AGE
 */
function cleanupOldLogFiles() {
    try {
        const logsDir = path_1.default.join(process.cwd(), "logs");
        // Check if logs directory exists
        if (!fs_1.default.existsSync(logsDir)) {
            console.log("Logs directory does not exist, nothing to clean up");
            return;
        }
        // Get list of files in logs directory
        const files = fs_1.default.readdirSync(logsDir);
        const now = Date.now();
        let deletedCount = 0;
        let deletedSize = 0;
        // Process each file
        files.forEach((file) => {
            // Only process backup log files (files with .bak extension)
            if (file.endsWith(".bak")) {
                const filePath = path_1.default.join(logsDir, file);
                try {
                    // Get file stats
                    const stats = fs_1.default.statSync(filePath);
                    // Check file age based on timestamp in filename
                    // Extract timestamp (assuming format filename.timestamp.bak)
                    const matches = file.match(/\.(\d+)\.bak$/);
                    if (matches && matches[1]) {
                        const fileTimestamp = parseInt(matches[1], 10);
                        const fileAge = now - fileTimestamp;
                        // Delete file if it's older than MAX_LOG_AGE
                        if (fileAge > MAX_LOG_AGE) {
                            const fileSize = stats.size;
                            fs_1.default.unlinkSync(filePath);
                            deletedCount++;
                            deletedSize += fileSize;
                            console.log(`Deleted old log file: ${filePath}`);
                        }
                    }
                }
                catch (error) {
                    console.error(`Error processing log file ${file}: ${error.message}`);
                }
            }
        });
        // Log summary
        if (deletedCount > 0) {
            console.log(`Cleaned up ${deletedCount} old log files, freed ${Math.round((deletedSize / 1024 / 1024) * 100) / 100} MB of disk space`);
        }
        else {
            console.log("No old log files to clean up");
        }
    }
    catch (error) {
        console.error(`Error cleaning up log files: ${error.message}`);
    }
}
// Export a function to set up periodic cleanup
function setupLogCleanup(intervalHours = 24) {
    console.log(`Setting up log cleanup to run every ${intervalHours} hours`);
    // Run cleanup immediately
    cleanupOldLogFiles();
    // Set up interval for future cleanups
    return setInterval(() => {
        console.log("Running scheduled log cleanup");
        cleanupOldLogFiles();
    }, intervalHours * 60 * 60 * 1000);
}
