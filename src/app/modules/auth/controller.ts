import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { AuthService } from "./service";
import sendResponse from "../../../shared/sendResponse";
import config from "../../../config";

const signUp = catchAsync(async (req: Request, res: Response) => {
  const { accessToken, refreshToken, result } = await AuthService.signUp(
    req.body
  );

  res.cookie("refreshToken", refreshToken, {
    secure: config.env === "production",
    httpOnly: true,
  });

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "User sign up successfully !",
    data: { accessToken, result },
  });
});

const signIn = catchAsync(async (req: Request, res: Response) => {
  const { accessToken, refreshToken } = await AuthService.signIn(req.body);

  res.cookie("refreshToken", refreshToken, {
    secure: config.env === "production",
    httpOnly: true,
  });

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "User sign in successfully !",
    data: { accessToken },
  });
});

export const AuthController = { signUp, signIn };
