import { Treatment } from "@prisma/client";
import prisma from "../../../constants/prisma";
import ApiError from "../../../errors/ApiError";
import { slots } from "./constant";

const createTreatment = async (data: Treatment): Promise<Treatment> => {
  const isExist = await prisma.treatment.findFirst({
    where: { name: data.name },
  });

  if (isExist) throw new ApiError(409, "The treatment is already exists !!");

  data.slots = slots;

  const result = await prisma.treatment.create({ data });

  return result;
};

export const TreatmentService = { createTreatment };
