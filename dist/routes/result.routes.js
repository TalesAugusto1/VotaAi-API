"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const result_controller_1 = require("../controllers/result.controller");
const auth_middleware_1 = require("../middleware/auth.middleware");
const router = (0, express_1.Router)();
// Get results for a specific pool (public)
router.get("/pools/:poolId", result_controller_1.getPoolResults);
// Get results for all pools the user has voted in - FIX THE ROUTE PATH
router.get("/user-voted", auth_middleware_1.authMiddleware, result_controller_1.getUserVotedPoolsResults);
exports.default = router;
