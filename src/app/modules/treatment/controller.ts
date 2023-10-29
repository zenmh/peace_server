import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { TreatmentService } from "./service";
import sendResponse from "../../../shared/sendResponse";
import { Treatment } from "@prisma/client";
import pick from "../../../shared/pick";
import { treatmentFilterableFields } from "./constant";

const createTreatment = catchAsync(async (req: Request, res: Response) => {
  const result = await TreatmentService.createTreatment(req.body);

  sendResponse<Treatment>(res, {
    statusCode: 200,
    success: true,
    message: "Treatment created successfully !",
    data: result,
  });
});

const getTreatments = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, treatmentFilterableFields);

  const result = await TreatmentService.getTreatments(filters);

  sendResponse<Treatment[]>(res, {
    statusCode: 200,
    success: true,
    message: "Treatments retrieved successfully !",
    data: result,
  });
});

export const TreatmentController = { createTreatment, getTreatments };
