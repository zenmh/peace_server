import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";

const app: Application = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Global Error Handler
app.use(globalErrorHandler);

// Test route
app.get("/", async (req: Request, res: Response) => {
  res.json("Peace on Fire 🔥 💧 🔥");
});

// Handle not found
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    success: false,
    message: "Not Found !!",
    errorMessages: [{ path: req.originalUrl, message: "API Not Found !!" }],
  });

  next();
});

export default app;
