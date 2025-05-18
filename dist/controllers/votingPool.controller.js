"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBatchVotingPools = exports.getOptionImage = exports.getPoolImage = exports.deleteVotingPool = exports.updateVotingPool = exports.createVotingPool = exports.getVotingPoolById = exports.getAllVotingPools = void 0;
const prisma_1 = __importDefault(require("../utils/prisma"));
const fetchService_1 = require("../services/fetchService");
// Get all voting pools with optional status filter and pagination
const getAllVotingPools = async (req, res) => {
    const status = req.query.status;
    // Add pagination parameters
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    console.log(`[POOL] Getting voting pools${status ? ` with status: ${status}` : ""}, page ${page}, limit ${limit} - User: ${req.user?.id || "Public"}`);
    try {
        // Log query parameters
        console.log(`[POOL] Query parameters:`, req.query);
        // Get the current date/time for status calculation
        const now = new Date();
        console.log(`[POOL] Current server time: ${now.toISOString()}`);
        // First, get the total count for pagination
        const totalCountFilters = {};
        if (status) {
            totalCountFilters.status = status;
        }
        // Count total pools that match filters
        const totalCount = await prisma_1.default.votingPool.count({
            where: totalCountFilters,
        });
        // Get paginated pools
        let pools = await prisma_1.default.votingPool.findMany({
            where: status ? { status } : undefined,
            include: {
                options: {
                    select: {
                        id: true,
                        text: true,
                        description: true,
                        image: true,
                    },
                },
            },
            orderBy: {
                createdAt: "desc",
            },
            skip,
            take: limit,
        });
        console.log(`[POOL] Found ${pools.length} voting pools (page ${page}/${Math.ceil(totalCount / limit)})`);
        await fetchAndAddVotesMany(pools, true);
        // Recalculate status based on current date
        pools = pools.map((pool) => {
            const startDate = new Date(pool.startDate);
            const endDate = new Date(pool.endDate);
            let currentStatus = "upcoming";
            if (now >= startDate && now < endDate) {
                currentStatus = "active";
            }
            else if (now >= endDate) {
                currentStatus = "closed";
            }
            // If calculated status differs from stored status, log it
            if (currentStatus !== pool.status) {
                console.log(`[POOL] Status recalculated for pool ${pool.id} - DB: ${pool.status}, Actual: ${currentStatus}`);
                console.log(`[POOL] Dates - Start: ${startDate.toISOString()}, End: ${endDate.toISOString()}, Now: ${now.toISOString()}`);
                // Update the status in memory (not in DB yet)
                return { ...pool, status: currentStatus };
            }
            return pool;
        });
        // Convert binary image data to base64 for direct use in the client
        const poolsWithImageData = pools.map((pool) => {
            // For main pool image
            const imageBase64 = pool.image
                ? `data:image/jpeg;base64,${Buffer.from(pool.image).toString("base64")}`
                : null;
            // For option images
            const optionsWithImages = pool.options.map((option) => {
                const optionImageBase64 = option.image
                    ? `data:image/jpeg;base64,${Buffer.from(option.image).toString("base64")}`
                    : null;
                return {
                    ...option,
                    image: undefined, // Remove binary data
                    imageData: optionImageBase64, // Add base64 data
                };
            });
            return {
                ...pool,
                image: undefined, // Remove binary data
                imageData: imageBase64, // Add base64 data for direct use
                options: optionsWithImages,
            };
        });
        // Create a paginated response
        const paginatedResponse = {
            data: poolsWithImageData,
            pagination: {
                page,
                limit,
                totalCount,
                totalPages: Math.ceil(totalCount / limit),
                hasNextPage: page < Math.ceil(totalCount / limit),
                hasPreviousPage: page > 1,
            },
        };
        console.log(`[POOL] Returning paginated voting pools to client (${poolsWithImageData.length} items)`);
        return res.status(200).json(paginatedResponse);
    }
    catch (error) {
        console.error("[POOL] Error fetching voting pools:", error);
        // Add detailed error logging
        if (error instanceof Error) {
            console.error("[POOL] Error message:", error.message);
            console.error("[POOL] Error stack:", error.stack);
        }
        // Check for database connection errors
        try {
            await prisma_1.default.$queryRaw `SELECT 1`;
            console.log("[POOL] Database connection is working");
        }
        catch (dbError) {
            console.error("[POOL] Database connection error:", dbError);
        }
        return res.status(500).json({ message: "Error fetching voting pools" });
    }
};
exports.getAllVotingPools = getAllVotingPools;
// Get a specific voting pool by ID
const getVotingPoolById = async (req, res) => {
    try {
        const params = req.params;
        const id = parseInt(params.id, 10);
        console.log(`[POOL] Getting voting pool by ID: ${id}`);
        const pool = await prisma_1.default.votingPool.findUnique({
            where: { id },
            include: {
                options: {
                    select: {
                        id: true,
                        text: true,
                        description: true,
                        image: true,
                    },
                },
            },
        });
        if (!pool) {
            console.log(`[POOL] Voting pool not found: ${id}`);
            return res.status(404).json({ message: "Voting pool not found" });
        }
        await fetchAndAddVotes(pool);
        // Convert binary images to base64 for direct use in the client
        const imageBase64 = pool.image
            ? `data:image/jpeg;base64,${Buffer.from(pool.image).toString("base64")}`
            : null;
        // For option images
        const optionsWithImages = pool.options.map((option) => {
            const optionImageBase64 = option.image
                ? `data:image/jpeg;base64,${Buffer.from(option.image).toString("base64")}`
                : null;
            return {
                ...option,
                image: undefined, // Remove binary data
                imageData: optionImageBase64, // Add base64 data
            };
        });
        // Create the response object with image data
        const poolWithImageData = {
            ...pool,
            image: undefined, // Remove binary data to avoid duplication
            imageData: imageBase64, // Add base64 data for direct use
            options: optionsWithImages,
        };
        console.log(`[POOL] Successfully retrieved voting pool: ${id} with inline image data`);
        console.log(`[POOL] Has image: ${!!imageBase64}`);
        console.log(`[POOL] Options count: ${poolWithImageData.options.length}`);
        console.log(`[POOL] Options with images: ${poolWithImageData.options.filter((o) => o.imageData).length}`);
        return res.status(200).json(poolWithImageData);
    }
    catch (error) {
        console.error("Error fetching voting pool:", error);
        return res.status(500).json({ message: "Error fetching voting pool" });
    }
};
exports.getVotingPoolById = getVotingPoolById;
// Create a new voting pool
const createVotingPool = async (req, res) => {
    console.log(`[POOL] Create voting pool request - User: ${req.user?.id}, Title: "${req.body.title}"`);
    console.log(`[POOL] Request body keys: ${Object.keys(req.body).join(", ")}`);
    console.log(`[POOL] Request files: ${req.files ? Object.keys(req.files).join(", ") : "No files"}`);
    console.log(`[POOL] Request file: ${req.file ? req.file.fieldname : "No file"}`);
    // Check if we have image data
    console.log(`[POOL] Has image data: ${!!req.body.image}`);
    if (req.body.image) {
        console.log(`[POOL] Image data size: ${req.body.image.length} bytes`);
    }
    // Log the anonymous field specifically
    console.log(`[POOL] anonymous value: "${req.body.anonymous}", type: ${typeof req.body
        .anonymous}`);
    try {
        const { title, description, category, image, startDate, endDate, anonymous, options, latitude, longitude, address, } = req.body;
        // Log parsed anonymous value
        console.log(`[POOL] Parsed anonymous value: ${anonymous}, type: ${typeof anonymous}`);
        // Ensure anonymous is a boolean
        const isAnonymous = typeof anonymous === "string"
            ? anonymous.toLowerCase() === "true"
            : Boolean(anonymous);
        console.log(`[POOL] Final anonymous value: ${isAnonymous}, type: ${typeof isAnonymous}`);
        // Check for options parsing - it might be a string from FormData
        let parsedOptions = options;
        if (typeof options === "string") {
            try {
                parsedOptions = JSON.parse(options);
                console.log(`[POOL] Successfully parsed options JSON string`);
            }
            catch (err) {
                console.error(`[POOL] Error parsing options JSON string: ${err}`);
                return res
                    .status(400)
                    .json({ message: "Invalid options format - must be valid JSON" });
            }
        }
        // Validate required fields
        if (!title ||
            !description ||
            !category ||
            !parsedOptions ||
            !Array.isArray(parsedOptions)) {
            console.error(`[POOL] Missing required fields: ${!title ? "title" : ""} ${!description ? "description" : ""} ${!category ? "category" : ""} ${!parsedOptions ? "options" : ""}`);
            return res.status(400).json({ message: "Missing required fields" });
        }
        console.log(`[POOL] Pool details - Title: "${title}", Category: "${category}", Options: ${parsedOptions?.length}, HasImage: ${!!image}`);
        console.log(`[POOL] Dates - Start: ${startDate}, End: ${endDate}, Anonymous: ${anonymous}`);
        if (latitude && longitude) {
            console.log(`[POOL] Location - Lat: ${latitude}, Long: ${longitude}, Address: "${address}"`);
        }
        // Determine status based on dates
        const now = new Date();
        let status = "upcoming";
        if (now >= new Date(startDate)) {
            status = "active";
        }
        if (now >= new Date(endDate)) {
            status = "closed";
        }
        console.log(`[POOL] Calculated status: ${status}`);
        // Create voting pool and options in a transaction
        console.log(`[POOL] Starting database transaction to create pool and options`);
        const votingPool = await prisma_1.default.$transaction(async (tx) => {
            // Create the voting pool
            console.log(`[POOL] Creating pool record with image: ${!!image}`);
            const pool = await tx.votingPool.create({
                data: {
                    title,
                    description,
                    category,
                    image,
                    startDate: new Date(startDate),
                    endDate: new Date(endDate),
                    anonymous: isAnonymous,
                    status,
                    latitude: latitude ? parseFloat(latitude) : null,
                    longitude: longitude ? parseFloat(longitude) : null,
                    address,
                },
            });
            console.log(`[POOL] Pool created with ID: ${pool.id}`);
            // Create options separately to handle binary images for each option
            console.log(`[POOL] Creating ${parsedOptions.length} options for pool ID: ${pool.id}`);
            for (let i = 0; i < parsedOptions.length; i++) {
                const option = parsedOptions[i];
                console.log(`[POOL] Creating option ${i} with text: ${option.text}, hasImage: ${!!option.image}`);
                await tx.votingOption.create({
                    data: {
                        poolId: pool.id,
                        text: option.text,
                        description: option.description,
                        image: option.image,
                    },
                });
            }
            console.log(`[POOL] All options created successfully`);
            // Return the created pool with options
            console.log(`[POOL] Fetching complete pool data`);
            return await tx.votingPool.findUnique({
                where: { id: pool.id },
                include: {
                    options: {
                        select: {
                            id: true,
                            text: true,
                            description: true,
                            image: true,
                        },
                    },
                },
            });
        }, {timeout: 15000, maxWait: 15000});
        if (!votingPool) {
            console.error(`[POOL] Error: Transaction completed but returned no data`);
            return res.status(500).json({ message: "Error creating voting pool" });
        }
        console.log(`[POOL] Transaction completed successfully, pool ID: ${votingPool.id}`);
        // Add hasImage flags
        const { image: _, ...poolData } = votingPool;
        const responseData = {
            ...poolData,
            hasImage: !!image,
            options: votingPool.options.map((option) => {
                const { image: optImage, ...optionData } = option;
                return {
                    ...optionData,
                    hasImage: !!optImage,
                };
            }),
        };
        console.log(`[POOL] Voting pool created successfully - ID: ${votingPool.id}, Title: "${title}"`);
        return res.status(201).json({
            message: "Voting pool created successfully",
            votingPool: responseData,
        });
    }
    catch (error) {
        console.error("[POOL] Error creating voting pool:", error);
        // Provide more specific error messages
        if (error.name === "PrismaClientValidationError") {
            console.error("[POOL] Prisma validation error - check field types and requirements");
            return res.status(400).json({
                message: "Invalid data format",
                details: error.message,
            });
        }
        return res.status(500).json({ message: "Error creating voting pool" });
    }
};
exports.createVotingPool = createVotingPool;
// Update a voting pool
const updateVotingPool = async (req, res) => {
    try {
        const params = req.params;
        const id = parseInt(params.id, 10);
        const { title, description, category, image, startDate, endDate, anonymous, status, options, latitude, longitude, address, } = req.body;
        // Check if voting pool exists
        const existingPool = await prisma_1.default.votingPool.findUnique({
            where: { id },
            include: { options: true },
        });
        if (!existingPool) {
            return res.status(404).json({ message: "Voting pool not found" });
        }
        // Determine status based on dates if not provided
        let statusToUse = status;
        if (!statusToUse && (startDate || endDate)) {
            const now = new Date();
            const poolStartDate = startDate
                ? new Date(startDate)
                : existingPool.startDate;
            const poolEndDate = endDate ? new Date(endDate) : existingPool.endDate;
            if (now < poolStartDate) {
                statusToUse = "upcoming";
            }
            else if (now >= poolStartDate && now < poolEndDate) {
                statusToUse = "active";
            }
            else {
                statusToUse = "closed";
            }
        }
        // Update in a transaction
        const updatedPool = await prisma_1.default.$transaction(async (tx) => {
            // Update the pool
            await tx.votingPool.update({
                where: { id },
                data: {
                    title,
                    description,
                    category,
                    image,
                    startDate: startDate ? new Date(startDate) : undefined,
                    endDate: endDate ? new Date(endDate) : undefined,
                    anonymous,
                    status: statusToUse,
                    latitude,
                    longitude,
                    address,
                },
            });
            // Update options if provided
            if (options && options.length > 0) {
                // Delete existing options
                await tx.votingOption.deleteMany({
                    where: { poolId: id },
                });
                // Create new options
                for (const option of options) {
                    await tx.votingOption.create({
                        data: {
                            poolId: id,
                            text: option.text,
                            description: option.description,
                            image: option.image,
                        },
                    });
                }
            }
            // Get the updated pool with options
            return await tx.votingPool.findUnique({
                where: { id },
                include: {
                    options: {
                        select: {
                            id: true,
                            text: true,
                            description: true,
                        },
                    },
                },
            });
        }, {timeout: 15000, maxWait: 15000});
        if (!updatedPool) {
            return res.status(500).json({ message: "Error updating voting pool" });
        }
        // Add hasImage flags
        const { image: _, ...poolData } = updatedPool;
        const responseData = {
            ...poolData,
            hasImage: !!image,
            options: updatedPool.options.map((option) => ({
                ...option,
                hasImage: false, // We don't have this info here, but the front end can fetch it separately
            })),
        };
        return res.status(200).json({
            message: "Voting pool updated successfully",
            votingPool: responseData,
        });
    }
    catch (error) {
        console.error("Error updating voting pool:", error);
        return res.status(500).json({ message: "Error updating voting pool" });
    }
};
exports.updateVotingPool = updateVotingPool;
// Delete a voting pool
const deleteVotingPool = async (req, res) => {
    try {
        const params = req.params;
        const id = parseInt(params.id, 10);
        // Check if voting pool exists
        const existingPool = await prisma_1.default.votingPool.findUnique({
            where: { id },
        });
        if (!existingPool) {
            return res.status(404).json({ message: "Voting pool not found" });
        }
        // Delete the voting pool (options will be deleted via cascade)
        await prisma_1.default.votingPool.delete({
            where: { id },
        });
        return res
            .status(200)
            .json({ message: "Voting pool deleted successfully" });
    }
    catch (error) {
        console.error("Error deleting voting pool:", error);
        return res.status(500).json({ message: "Error deleting voting pool" });
    }
};
exports.deleteVotingPool = deleteVotingPool;
// Get pool image by ID
const getPoolImage = async (req, res) => {
    try {
        const params = req.params;
        const id = parseInt(params.id, 10);
        const pool = await prisma_1.default.votingPool.findUnique({
            where: { id },
            select: { image: true },
        });
        if (!pool || !pool.image) {
            return res.status(404).json({ message: "Image not found" });
        }
        // Set content type to image
        res.setHeader("Content-Type", "image/jpeg");
        // Send the binary image data
        return res.send(pool.image);
    }
    catch (error) {
        console.error("Error fetching pool image:", error);
        return res.status(500).json({ message: "Error fetching image" });
    }
};
exports.getPoolImage = getPoolImage;
// Get option image by ID
const getOptionImage = async (req, res) => {
    try {
        const params = req.params;
        const id = parseInt(params.id, 10);
        const option = await prisma_1.default.votingOption.findUnique({
            where: { id },
            select: { image: true },
        });
        if (!option || !option.image) {
            return res.status(404).json({ message: "Image not found" });
        }
        // Set content type to image
        res.setHeader("Content-Type", "image/jpeg");
        // Send the binary image data
        return res.send(option.image);
    }
    catch (error) {
        console.error("Error fetching option image:", error);
        return res.status(500).json({ message: "Error fetching image" });
    }
};
exports.getOptionImage = getOptionImage;
// Get multiple voting pools by IDs in a single batch request
const getBatchVotingPools = async (req, res) => {
    try {
        const { ids } = req.query;
        if (!ids || typeof ids !== "string") {
            return res
                .status(400)
                .json({ message: "Missing or invalid 'ids' parameter" });
        }
        // Parse the comma-separated string of IDs
        const poolIds = ids.split(",").filter((id) => id.trim().length > 0).map((id) => parseInt(id.trim(), 10));
        if (poolIds.length === 0) {
            return res.status(400).json({ message: "No valid IDs provided" });
        }
        if (poolIds.length > 50) {
            return res
                .status(400)
                .json({ message: "Too many IDs requested. Maximum is 50." });
        }
        console.log(`[POOL] Getting batch of voting pools. Count: ${poolIds.length}`);
        // Find all pools that match the given IDs
        const pools = await prisma_1.default.votingPool.findMany({
            where: {
                id: {
                    in: poolIds,
                },
            },
            include: {
                options: {
                    select: {
                        id: true,
                        text: true,
                        description: true,
                        image: true,
                    },
                },
            },
        });
        console.log(`[POOL] Found ${pools.length} pools from requested ${poolIds.length} IDs`);
        await fetchAndAddVotesMany(pools, true);
        // Convert binary images to base64 for direct use in the client
        const poolsWithImageData = pools.map((pool) => {
            const imageBase64 = pool.image
                ? `data:image/jpeg;base64,${Buffer.from(pool.image).toString("base64")}`
                : null;
            // For option images
            const optionsWithImages = pool.options.map((option) => {
                const optionImageBase64 = option.image
                    ? `data:image/jpeg;base64,${Buffer.from(option.image).toString("base64")}`
                    : null;
                return {
                    ...option,
                    image: undefined, // Remove binary data
                    imageData: optionImageBase64, // Add base64 data
                };
            });
            return {
                ...pool,
                image: undefined, // Remove binary data
                imageData: imageBase64, // Add base64 data for direct use
                options: optionsWithImages,
            };
        });
        return res.status(200).json(poolsWithImageData);
    }
    catch (error) {
        console.error("[POOL] Error fetching batch voting pools:", error);
        return res
            .status(500)
            .json({ message: "Error fetching batch voting pools" });
    }
};
exports.getBatchVotingPools = getBatchVotingPools;
const fetchAndAddVotes = async (pool, totalVotes = false) => {
    const fetchService = new fetchService_1.FetchService();
    if (!pool)
        return;
    const response = await fetchService.get(`/results/${pool.id}`);
    pool.options = pool.options.map((option) => ({
        ...option,
        "_count": {
            votes: response.totais[option.id] || 0,
        }
    }));
    if (totalVotes) {
        pool["_count"] = { votes: response.totalVotos || 0 };
    }
};
const fetchAndAddVotesMany = async (pools, totalVotes = false) => {
    const fetchService = new fetchService_1.FetchService();
    if (!pools || pools.length === 0)
        return;
    // Collect all pool IDs
    const poolIds = pools.map((pool) => pool.id);
    // Call the batch endpoint
    const responses = await fetchService.post("/results_many", { poll_ids: poolIds });
    // Map responses by pollId for quick lookup
    const responseMap = new Map();
    for (const resp of responses) {
        responseMap.set(resp.pollId, resp);
    }
    // Mutate each pool with the fetched votes
    for (const pool of pools) {
        const response = responseMap.get(pool.id);
        if (!response)
            continue;
        pool.options = pool.options.map((option) => ({
            ...option,
            _count: {
                votes: response.totais[option.id] || 0,
            },
        }));
        if (totalVotes) {
            pool._count = { votes: response.totalVotos || 0 };
        }
    }
};
