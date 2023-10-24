import { User } from "@prisma/client";
import prisma from "../../../constants/prisma";
import ApiError from "../../../errors/ApiError";

const signUp = async (data: User): Promise<User> => {
  const isExist = await prisma.user.findFirst({
    where: { name: data.name, email: data.email, role: data.role },
  });

  if (isExist) throw new ApiError(409, "The user is already exist !!");

  const result = await prisma.user.create({ data });

  return result;
};

export const AuthService = { signUp };
