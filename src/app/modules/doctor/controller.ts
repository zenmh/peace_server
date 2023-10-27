import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { DoctorService } from "./service";
import sendResponse from "../../../shared/sendResponse";
import { Doctor } from "@prisma/client";

const createDoctor = catchAsync(async (req: Request, res: Response) => {
  const result = await DoctorService.createDoctor(req.body);

  sendResponse<Doctor>(res, {
    statusCode: 200,
    success: true,
    message: "Doctor created successfully !",
    data: result,
  });
});

export const DoctorController = { createDoctor };
