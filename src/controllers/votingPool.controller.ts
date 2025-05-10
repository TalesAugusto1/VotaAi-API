import { Request, Response } from "express";
import prisma from "../utils/prisma";

// Get all voting pools with optional status filter
export const getAllVotingPools = async (req: Request, res: Response) => {
  const status = req.query.status as string | undefined;
  console.log(
    `[POOL] Getting all voting pools${
      status ? ` with status: ${status}` : ""
    } - User: ${req.user?.id || "Public"}`
  );

  try {
    // Log query parameters
    console.log(`[POOL] Query parameters:`, req.query);

    const pools = await prisma.votingPool.findMany({
      where: status ? { status: status as string } : undefined,
      include: {
        options: {
          select: {
            id: true,
            text: true,
            _count: {
              select: { votes: true },
            },
          },
        },
        _count: {
          select: { votes: true },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    console.log(`[POOL] Found ${pools.length} voting pools`);

    // Add hasImage flag to each pool
    const poolsWithImageFlags = pools.map((pool) => {
      const { image: _, ...poolData } = pool;
      return {
        ...poolData,
        hasImage: !!pool.image,
      };
    });

    console.log(
      `[POOL] Returning ${poolsWithImageFlags.length} voting pools to client`
    );
    return res.status(200).json(poolsWithImageFlags);
  } catch (error) {
    console.error("[POOL] Error fetching voting pools:", error);
    return res.status(500).json({ message: "Error fetching voting pools" });
  }
};

// Get a specific voting pool by ID
export const getVotingPoolById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const pool = await prisma.votingPool.findUnique({
      where: { id },
      include: {
        options: {
          select: {
            id: true,
            text: true,
            description: true,
            _count: {
              select: { votes: true },
            },
          },
        },
      },
    });

    if (!pool) {
      return res.status(404).json({ message: "Voting pool not found" });
    }

    // Add hasImage flag to pool and options
    const { image: _, ...poolData } = pool;
    const poolWithImageFlag = {
      ...poolData,
      hasImage: !!pool.image,
      options: await Promise.all(
        pool.options.map(async (option) => {
          // Fetch option to get image data
          const optionData = await prisma.votingOption.findUnique({
            where: { id: option.id },
            select: { image: true },
          });

          return {
            ...option,
            hasImage: !!optionData?.image,
          };
        })
      ),
    };

    return res.status(200).json(poolWithImageFlag);
  } catch (error) {
    console.error("Error fetching voting pool:", error);
    return res.status(500).json({ message: "Error fetching voting pool" });
  }
};

// Create a new voting pool
export const createVotingPool = async (req: Request, res: Response) => {
  console.log(
    `[POOL] Create voting pool request - User: ${req.user?.id}, Title: "${req.body.title}"`
  );
  try {
    const {
      title,
      description,
      category,
      image,
      startDate,
      endDate,
      anonymous,
      options,
      latitude,
      longitude,
      address,
    } = req.body;

    console.log(
      `[POOL] Pool details - Title: "${title}", Category: "${category}", Options: ${
        options?.length
      }, HasImage: ${!!image}`
    );
    console.log(
      `[POOL] Dates - Start: ${startDate}, End: ${endDate}, Anonymous: ${anonymous}`
    );

    if (latitude && longitude) {
      console.log(
        `[POOL] Location - Lat: ${latitude}, Long: ${longitude}, Address: "${address}"`
      );
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
    console.log(
      `[POOL] Starting database transaction to create pool and options`
    );
    const votingPool = await prisma.$transaction(async (tx) => {
      // Create the voting pool
      console.log(`[POOL] Creating pool record`);
      const pool = await tx.votingPool.create({
        data: {
          title,
          description,
          category,
          image,
          startDate: new Date(startDate),
          endDate: new Date(endDate),
          anonymous: anonymous || false,
          status,
          latitude,
          longitude,
          address,
        },
      });
      console.log(`[POOL] Pool created with ID: ${pool.id}`);

      // Create options separately to handle binary images for each option
      console.log(
        `[POOL] Creating ${options.length} options for pool ID: ${pool.id}`
      );
      for (const option of options) {
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
            },
          },
        },
      });
    });

    if (!votingPool) {
      console.error(`[POOL] Error: Transaction completed but returned no data`);
      return res.status(500).json({ message: "Error creating voting pool" });
    }
    console.log(
      `[POOL] Transaction completed successfully, pool ID: ${votingPool.id}`
    );

    // Add hasImage flags
    const { image: _, ...poolData } = votingPool;
    const responseData = {
      ...poolData,
      hasImage: !!image,
      options: votingPool.options.map((option) => ({
        ...option,
        hasImage: false, // We don't have this info here, but the front end can fetch it separately
      })),
    };

    console.log(
      `[POOL] Voting pool created successfully - ID: ${votingPool.id}, Title: "${title}"`
    );
    return res.status(201).json({
      message: "Voting pool created successfully",
      votingPool: responseData,
    });
  } catch (error) {
    console.error("[POOL] Error creating voting pool:", error);
    return res.status(500).json({ message: "Error creating voting pool" });
  }
};

// Update a voting pool
export const updateVotingPool = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const {
      title,
      description,
      category,
      image,
      startDate,
      endDate,
      anonymous,
      status,
      options,
      latitude,
      longitude,
      address,
    } = req.body;

    // Check if voting pool exists
    const existingPool = await prisma.votingPool.findUnique({
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
      } else if (now >= poolStartDate && now < poolEndDate) {
        statusToUse = "active";
      } else {
        statusToUse = "closed";
      }
    }

    // Update in a transaction
    const updatedPool = await prisma.$transaction(async (tx) => {
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
    });

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
  } catch (error) {
    console.error("Error updating voting pool:", error);
    return res.status(500).json({ message: "Error updating voting pool" });
  }
};

// Delete a voting pool
export const deleteVotingPool = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // Check if voting pool exists
    const existingPool = await prisma.votingPool.findUnique({
      where: { id },
    });

    if (!existingPool) {
      return res.status(404).json({ message: "Voting pool not found" });
    }

    // Delete the voting pool (options will be deleted via cascade)
    await prisma.votingPool.delete({
      where: { id },
    });

    return res
      .status(200)
      .json({ message: "Voting pool deleted successfully" });
  } catch (error) {
    console.error("Error deleting voting pool:", error);
    return res.status(500).json({ message: "Error deleting voting pool" });
  }
};

// Get pool image by ID
export const getPoolImage = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const pool = await prisma.votingPool.findUnique({
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
  } catch (error) {
    console.error("Error fetching pool image:", error);
    return res.status(500).json({ message: "Error fetching image" });
  }
};

// Get option image by ID
export const getOptionImage = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const option = await prisma.votingOption.findUnique({
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
  } catch (error) {
    console.error("Error fetching option image:", error);
    return res.status(500).json({ message: "Error fetching image" });
  }
};
