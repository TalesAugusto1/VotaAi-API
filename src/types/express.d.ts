import "express";

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
      user?: {
        id: string;
        role: number;
      };
    }
  }
}
