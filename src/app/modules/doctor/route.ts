import { Router } from "express";
import { DoctorController } from "./controller";
import validateRequest from "../../middlewares/validateRequest";
import { ZCreateDoctor } from "./validation";
import auth from "../../middlewares/auth";
import { Role } from "@prisma/client";

const router = Router();
const { ADMIN, SUPER_ADMIN } = Role;
const { createDoctor, getDoctor, getDoctors } = DoctorController;

router
  .post(
    "/",
    auth(ADMIN, SUPER_ADMIN),
    validateRequest(ZCreateDoctor),
    createDoctor
  )
  .get("/:id", getDoctor)
  .get("/", getDoctors);

export const DoctorRoutes = router;
