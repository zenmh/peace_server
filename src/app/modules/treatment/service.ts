import { Prisma, Treatment } from "@prisma/client";
import prisma from "../../../constants/prisma";
import ApiError from "../../../errors/ApiError";
import { slots, treatmentFilterableFields } from "./constant";
import { ITreatmentFilters } from "./interface";
import { IPaginationOptions } from "../../../interfaces/pagination";

const createTreatment = async (data: Treatment): Promise<Treatment> => {
  const isExist = await prisma.treatment.findFirst({
    where: { name: data.name },
  });

  if (isExist) throw new ApiError(409, "The treatment is already exists !!");

  data.slots = slots;

  const result = await prisma.treatment.create({ data });

  return result;
};

const getTreatments = async ({
  searchTerm,
  ...filterData
}: ITreatmentFilters): Promise<Treatment[]> => {
  const pipeline = [];

  if (searchTerm) {
    pipeline.push({
      OR: treatmentFilterableFields.map((field) => ({
        [field]: { contains: searchTerm, mode: "insensitive" },
      })),
    });
  }

  if (Object.keys(filterData).length > 0) {
    pipeline.push({
      AND: Object.keys(filterData).map((key) => ({
        [key]: { equals: (filterData as any)[key] },
      })),
    });
  }

  const where: Prisma.TreatmentWhereInput =
    pipeline.length > 0 ? { AND: pipeline } : {};

  const result = await prisma.treatment.findMany({ where });

  return result;
};

export const TreatmentService = { createTreatment };
