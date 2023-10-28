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

const getDoctor = catchAsync(async (req: Request, res: Response) => {
  const result = await DoctorService.getDoctor(req.params.id);

  sendResponse<Omit<Doctor, "password">>(res, {
    statusCode: 200,
    success: true,
    message: "Doctor retrieved successfully !",
    data: result,
  });
});

export const DoctorController = { createDoctor, getDoctor };
