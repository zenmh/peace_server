import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { AuthService } from "./service";
import sendResponse from "../../../shared/sendResponse";
import { User } from "@prisma/client";

const signUp = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.signUp(req.body);

  sendResponse<User>(res, {
    statusCode: 200,
    success: true,
    message: "User sign up successfully !",
    data: result,
  });
});

export const AuthController = { signUp };
