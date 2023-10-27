import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { TreatmentService } from "./service";
import sendResponse from "../../../shared/sendResponse";
import { Treatment } from "@prisma/client";

const createTreatment = catchAsync(async (req: Request, res: Response) => {
  const result = await TreatmentService.createTreatment(req.body);

  sendResponse<Treatment>(res, {
    statusCode: 200,
    success: true,
    message: "Treatment created successfully !",
    data: result,
  });
});

export const TreatmentController = { createTreatment };
