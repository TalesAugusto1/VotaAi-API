import { Router } from "express";
import {
  getAllVotingPools,
  getVotingPoolById,
  createVotingPool,
  updateVotingPool,
  deleteVotingPool,
  getPoolImage,
  getOptionImage,
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
router.get("/:id", getVotingPoolById);
router.get("/:id/image", getPoolImage);
router.get("/option/:id/image", getOptionImage);

// Protected routes - require authentication
// For creating voting pools with option images
router.post(
  "/",
  authMiddleware,
  // Handle pool image and option images
  (req, res, next) => {
    // If the request has option files, use uploadOptionImages
    // otherwise use uploadSingle for just the pool image
    const contentType = req.headers["content-type"] || "";
    if (
      contentType.includes("multipart/form-data") &&
      req.body.hasOptionImages === "true"
    ) {
      uploadOptionImages(req, res, next);
    } else {
      uploadSingle("image")(req, res, next);
    }
  },
  // Process the images accordingly
  (req, res, next) => {
    if (req.files) {
      processOptionImages(req, res, next);
    } else {
      processImage(req, res, next);
    }
  },
  validate(votingPoolSchema),
  createVotingPool
);

// Updating voting pools with option images
router.put(
  "/:id",
  authMiddleware,
  // Same logic as POST
  (req, res, next) => {
    const contentType = req.headers["content-type"] || "";
    if (
      contentType.includes("multipart/form-data") &&
      req.body.hasOptionImages === "true"
    ) {
      uploadOptionImages(req, res, next);
    } else {
      uploadSingle("image")(req, res, next);
    }
  },
  (req, res, next) => {
    if (req.files) {
      processOptionImages(req, res, next);
    } else {
      processImage(req, res, next);
    }
  },
  validate(updateVotingPoolSchema),
  updateVotingPool
);

router.delete("/:id", authMiddleware, deleteVotingPool);

export default router;
