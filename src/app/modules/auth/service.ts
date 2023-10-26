import { User } from "@prisma/client";
import prisma from "../../../constants/prisma";
import ApiError from "../../../errors/ApiError";
import { hashPassword, matchPassword } from "../../../helpers/bcrypt";
import { ISignInResponse, ISignUpResponse, ISingUp } from "./interface";
import { createAccessToken, createRefreshToken } from "../../../helpers/jwt";

const signUp = async (data: User): Promise<ISignUpResponse> => {
  const isExist = await prisma.user.findFirst({
    where: { name: data.name, email: data.email, role: data.role },
  });

  if (isExist) throw new ApiError(409, "The user is already exist !!");

  data.password = await hashPassword(data.password);

  const result = await prisma.user.create({ data });

  const accessToken = await createAccessToken(result.id, result.role);
  const refreshToken = await createRefreshToken(result.id, result.role);

  return { accessToken, refreshToken, result };
};

const signIn = async ({
  email,
  password,
}: ISingUp): Promise<ISignInResponse> => {
  const isUserExist = await prisma.user.findFirst({
    where: { email },
  });

  if (!isUserExist) throw new ApiError(404, "User not found !!");

  const isPasswordMathch = await matchPassword(password, isUserExist.password);

  if (!isPasswordMathch) throw new ApiError(400, "Password is incorrect !");

  const { id, role } = isUserExist;

  const accessToken = await createAccessToken(id, role);
  const refreshToken = await createRefreshToken(id, role);

  return { accessToken, refreshToken };
};

export const AuthService = { signUp, signIn };
