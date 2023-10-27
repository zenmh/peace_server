import { z } from "zod";
import { Branch, Speciality } from "@prisma/client";

const ZCreateDoctor = z.object({
  body: z.object({
    name: z.string({ required_error: "Name is required !!" }),
    email: z.string({ required_error: "Email is required !!" }).email(),
    password: z.string({ required_error: "Password is required !!" }),
    contactNo: z.string({ required_error: "Contact number is required !!" }),
    address: z.string().optional(),
    image: z.string().optional(),
    experiences: z.string({ required_error: "Experiences is required !!" }),
    speciality: z.enum([...Object.keys(Speciality)] as [string, ...string[]]),
    branch: z
      .enum([...Object.keys(Branch)] as [string, ...string[]])
      .default(Branch.DHAKA),
    treatmentId: z.string({ required_error: "Treatment id is required !!" }),
  }),
});

export { ZCreateDoctor };
