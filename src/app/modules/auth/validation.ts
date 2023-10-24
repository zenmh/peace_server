import { Role } from "@prisma/client";
import { z } from "zod";

const ZSignUp = z.object({
  body: z.object({
    name: z.string({ required_error: "Name is required !!" }),
    email: z.string({ required_error: "Email is required !!" }).email(),
    password: z.string({ required_error: "Password is required !!" }),
    role: z
      .enum([...Object.keys(Role)] as [string, ...string[]])
      .default(Role.PATIENT),
    contactNo: z.string().optional(),
    address: z.string().optional(),
    image: z.string().optional(),
  }),
});

export { ZSignUp };
