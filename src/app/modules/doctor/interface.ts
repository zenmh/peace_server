import { Doctor } from "@prisma/client";

type IDoctorWithoutPassword = Omit<Doctor, "password">;

type IDoctorFilters = {
  searchTerm?: string;
  id?: string;
  email?: string;
  contactNo?: string;
  branch?: string;
};

export { IDoctorWithoutPassword, IDoctorFilters };
