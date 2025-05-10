import multer from "multer";
import { Request, Response, NextFunction } from "express";
import fs from "fs";
import path from "path";

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
  const fields = [];
  // Max 10 options with images
  for (let i = 0; i < 10; i++) {
    fields.push({ name: `option${i}` });
  }

  const uploadMiddleware = upload.fields(fields);

  uploadMiddleware(req, res, (err) => {
    if (err) {
      return res.status(400).json({ message: err.message });
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
      return next();
    }

    // Add the file's binary data to the request body with a consistent field name
    const fieldName = req.file.fieldname === "avatar" ? "avatarImage" : "image";
    req.body[fieldName] = req.file.buffer;

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
      return next();
    }

    // Parse options from the request body if they exist as a string
    if (typeof req.body.options === "string") {
      try {
        req.body.options = JSON.parse(req.body.options);
      } catch (error) {
        return res.status(400).json({ message: "Invalid options JSON format" });
      }
    }

    // If options aren't provided, create an empty array
    if (!req.body.options) {
      req.body.options = [];
    }

    // Get the files from the request
    const files = req.files as { [fieldname: string]: Express.Multer.File[] };

    // For each option file, add the binary data to the corresponding option
    Object.keys(files).forEach((fieldName) => {
      if (fieldName.startsWith("option")) {
        const index = parseInt(fieldName.replace("option", ""));
        if (index >= 0 && index < req.body.options.length) {
          req.body.options[index].image = files[fieldName][0].buffer;
        }
      }
    });

    next();
  } catch (error) {
    console.error("Error processing option images:", error);
    res.status(500).json({ message: "Error processing option images" });
  }
};

// Create a custom type for the uploaded file
declare global {
  namespace Express {
    interface Request {
      file?: {
        fieldname: string;
        originalname: string;
        encoding: string;
        mimetype: string;
        buffer: Buffer;
        size: number;
      };
      files?: {
        [fieldname: string]: {
          fieldname: string;
          originalname: string;
          encoding: string;
          mimetype: string;
          buffer: Buffer;
          size: number;
        }[];
      };
    }
  }
}
