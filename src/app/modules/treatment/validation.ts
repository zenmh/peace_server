import { Speciality } from "@prisma/client";
import { z } from "zod";

const ZCreateTreatment = z.object({
  body: z.object({
    name: z.enum([...Object.keys(Speciality)] as [string, ...string[]]),
  }),
});

export { ZCreateTreatment };
