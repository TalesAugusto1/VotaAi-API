import { Router } from "express";
import {
  getAllVotingPools,
  getVotingPoolById,
  createVotingPool,
  updateVotingPool,
  deleteVotingPool,
  getPoolImage,
  getOptionImage,
  getBatchVotingPools,
} from "../controllers/votingPool.controller";
import { validate } from "../middleware/validation.middleware";
import {
  votingPoolSchema,
  updateVotingPoolSchema,
} from "../validation/schemas";
import { authMiddleware } from "../middleware/auth.middleware";
import {
  uploadSingle,
  processImage,
  uploadOptionImages,
  processOptionImages,
} from "../middleware/upload.middleware";

const router = Router();

// Public routes
router.get("/", getAllVotingPools);
router.get("/batch", getBatchVotingPools);
router.get("/:id", getVotingPoolById);
router.get("/:id/image", getPoolImage);
router.get("/option/:id/image", getOptionImage);

// Protected routes - require authentication
// For creating voting pools with option images
router.post(
  "/",
  authMiddleware,
  // Handle all uploads with the option images middleware to be safe
  uploadOptionImages,
  // Process the images accordingly
  (req, res, next) => {
    console.log(`[ROUTE] Processing images, files present: ${!!req.files}`);
    if (req.files && Object.keys(req.files).length > 0) {
      processOptionImages(req, res, next);
    } else if (req.file) {
      processImage(req, res, next);
    } else {
      next();
    }
  },
  validate(votingPoolSchema),
  createVotingPool
);

// Updating voting pools with option images
router.put(
  "/:id",
  authMiddleware,
  // Use the same upload middleware as POST
  uploadOptionImages,
  // Process the images accordingly
  (req, res, next) => {
    console.log(
      `[ROUTE] Processing images for update, files present: ${!!req.files}`
    );
    if (req.files && Object.keys(req.files).length > 0) {
      processOptionImages(req, res, next);
    } else if (req.file) {
      processImage(req, res, next);
    } else {
      next();
    }
  },
  validate(updateVotingPoolSchema),
  updateVotingPool
);

router.delete("/:id", authMiddleware, deleteVotingPool);

export default router;
