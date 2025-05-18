import multer from "multer";
import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
// Types are now defined in /src/types/express.d.ts
dotenv.config();
// Configure in-memory storage instead of disk storage
const storage = multer.memoryStorage();

// Create the multer instance for handling file uploads
const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5 MB max file size
  },
  fileFilter: (_req, file, cb) => {
    // Accept only image files
    if (file.mimetype.startsWith("image/")) {
      return cb(null, true);
    }
    return cb(new Error("Only image files are allowed"));
  },
});

// Middleware for handling single file uploads
export const uploadSingle = (fieldName: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const uploadMiddleware = upload.single(fieldName);

    uploadMiddleware(req, res, (err) => {
      if (err) {
        return res.status(400).json({ message: err.message });
      }

      // File is available in req.file
      next();
    });
  };
};

// Middleware for handling multiple file uploads for voting options
export const uploadOptionImages = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Create an array of fields for option images (option0, option1, etc.)
  const fields = [{ name: "image" }]; // Add main image field
  // Max 10 options with images
  for (let i = 0; i < 10; i++) {
    fields.push({ name: `option${i}` });
  }

  console.log(
    `[UPLOAD] Setting up upload with fields: ${fields
      .map((f) => f.name)
      .join(", ")}`
  );
  const uploadMiddleware = upload.fields(fields);

  uploadMiddleware(req, res, (err) => {
    if (err) {
      console.error(`[UPLOAD] Error in uploadOptionImages: ${err.message}`);
      return res.status(400).json({ message: err.message });
    }

    // Log the files received
    if (req.files) {
      const files = req.files as { [fieldname: string]: Express.Multer.File[] };
      console.log(
        `[UPLOAD] Received files for fields: ${Object.keys(files).join(", ")}`
      );

      // If we have a single 'image' field, set it as req.file for backward compatibility
      if (files["image"] && files["image"].length > 0) {
        req.file = files["image"][0];
        console.log(`[UPLOAD] Set main image file for backward compatibility`);
      }
    } else {
      console.log(`[UPLOAD] No files received`);
    }

    // Files are available in req.files
    next();
  });
};

// Middleware for handling image binary data processing
export const processImage = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.file) {
      console.log("[PROCESS] No file to process in processImage middleware");
      return next();
    }

    console.log(
      `[PROCESS] Processing image: ${req.file.fieldname}, size: ${req.file.size} bytes`
    );

    // Add the file's binary data to the request body with a consistent field name
    req.body.image = req.file.buffer;

    console.log("[PROCESS] Successfully added image buffer to request body");
    next();
  } catch (error) {
    console.error("Error processing image:", error);
    res.status(500).json({ message: "Error processing image" });
  }
};

// Middleware for processing option images for voting pools
export const processOptionImages = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      console.log(
        "[PROCESS] No files to process in processOptionImages middleware"
      );
      return next();
    }

    console.log(
      `[PROCESS] Processing option images, fields: ${Object.keys(
        req.files
      ).join(", ")}`
    );

    // Parse options from the request body if they exist as a string
    if (typeof req.body.options === "string") {
      try {
        req.body.options = JSON.parse(req.body.options);
        console.log(
          `[PROCESS] Parsed options JSON successfully, found ${req.body.options.length} options`
        );
      } catch (error) {
        console.error("[PROCESS] Failed to parse options JSON:", error);
        return res.status(400).json({ message: "Invalid options JSON format" });
      }
    }

    // If options aren't provided, create an empty array
    if (!req.body.options) {
      console.log("[PROCESS] No options found, creating empty array");
      req.body.options = [];
    }

    // Get the files from the request
    const files = req.files as { [fieldname: string]: Express.Multer.File[] };

    // Add the main image to the request body if it exists
    if (files["image"] && files["image"].length > 0) {
      req.body.image = files["image"][0].buffer;
      console.log("[PROCESS] Added main pool image buffer to request body");
    }

    // For each option file, add the binary data to the corresponding option
    Object.keys(files).forEach((fieldName) => {
      if (fieldName.startsWith("option")) {
        const index = parseInt(fieldName.replace("option", ""));
        if (index >= 0 && index < req.body.options.length) {
          req.body.options[index].image = files[fieldName][0].buffer;
          console.log(`[PROCESS] Added image buffer to option ${index}`);
        }
      }
    });

    console.log("[PROCESS] Successfully processed all image files");
    next();
  } catch (error) {
    console.error("Error processing option images:", error);
    res.status(500).json({ message: "Error processing option images" });
  }
};
