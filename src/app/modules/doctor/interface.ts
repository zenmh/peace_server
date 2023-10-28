import { Doctor } from "@prisma/client";

type DoctorWithoutPassword = Omit<Doctor, "password">;

export { DoctorWithoutPassword };
