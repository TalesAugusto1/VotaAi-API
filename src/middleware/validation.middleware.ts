import { Request, Response, NextFunction } from "express";
import { ZodSchema } from "zod";

export const validate =
  (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log(`[VALIDATION] Validating request body`, {
        route: req.path,
        method: req.method,
        bodyKeys: Object.keys(req.body),
      });

      // Perform validation, but be lenient with unknown keys (for multer)
      const result = schema.safeParse(req.body);

      if (!result.success) {
        console.error(`[VALIDATION] Validation failed:`, result.error.errors);

        // Log more details about the validation error
        const validationData = {
          cpfDigitsOnly: req.body.cpf?.match(/^\d+$/) ? "Yes" : "No",
          cpfLength: req.body.cpf?.length,
          emailValid: req.body.email
            ? /^\S+@\S+\.\S+$/.test(req.body.email)
            : false,
          nameLength: req.body.name?.length,
          passwordLength: req.body.password?.length,
        };

        console.log(
          `[VALIDATION] Data that failed validation:`,
          validationData
        );

        return res.status(400).json({
          message: "Validation error",
          errors: result.error.errors.map((e) => ({
            path: e.path.join("."),
            message: e.message,
          })),
        });
      }

      console.log(`[VALIDATION] Validation successful`);
      next();
    } catch (error) {
      console.error("[VALIDATION] Unexpected validation error:", error);
      return res
        .status(500)
        .json({ message: "Server error during validation" });
    }
  };
