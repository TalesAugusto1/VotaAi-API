"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const votingPool_controller_1 = require("../controllers/votingPool.controller");
const validation_middleware_1 = require("../middleware/validation.middleware");
const schemas_1 = require("../validation/schemas");
const auth_middleware_1 = require("../middleware/auth.middleware");
const upload_middleware_1 = require("../middleware/upload.middleware");
const router = (0, express_1.Router)();
// Public routes
router.get("/", votingPool_controller_1.getAllVotingPools);
router.get("/batch", votingPool_controller_1.getBatchVotingPools);
router.get("/:id", votingPool_controller_1.getVotingPoolById);
router.get("/:id/image", votingPool_controller_1.getPoolImage);
router.get("/option/:id/image", votingPool_controller_1.getOptionImage);
// Protected routes - require authentication
// For creating voting pools with option images
router.post("/", auth_middleware_1.authMiddleware, 
// Handle all uploads with the option images middleware to be safe
upload_middleware_1.uploadOptionImages, 
// Process the images accordingly
(req, res, next) => {
    console.log(`[ROUTE] Processing images, files present: ${!!req.files}`);
    if (req.files && Object.keys(req.files).length > 0) {
        (0, upload_middleware_1.processOptionImages)(req, res, next);
    }
    else if (req.file) {
        (0, upload_middleware_1.processImage)(req, res, next);
    }
    else {
        next();
    }
}, (0, validation_middleware_1.validate)(schemas_1.votingPoolSchema), votingPool_controller_1.createVotingPool);
// Updating voting pools with option images
router.put("/:id", auth_middleware_1.authMiddleware, 
// Use the same upload middleware as POST
upload_middleware_1.uploadOptionImages, 
// Process the images accordingly
(req, res, next) => {
    console.log(`[ROUTE] Processing images for update, files present: ${!!req.files}`);
    if (req.files && Object.keys(req.files).length > 0) {
        (0, upload_middleware_1.processOptionImages)(req, res, next);
    }
    else if (req.file) {
        (0, upload_middleware_1.processImage)(req, res, next);
    }
    else {
        next();
    }
}, (0, validation_middleware_1.validate)(schemas_1.updateVotingPoolSchema), votingPool_controller_1.updateVotingPool);
router.delete("/:id", auth_middleware_1.authMiddleware, votingPool_controller_1.deleteVotingPool);
exports.default = router;
