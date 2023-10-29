import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { ZCreateTreatment } from "./validation";
import { TreatmentController } from "./controller";
import auth from "../../middlewares/auth";
import { Role } from "@prisma/client";

const router = Router();
const { ADMIN, SUPER_ADMIN } = Role;
const { createTreatment, getTreatments } = TreatmentController;

router
  .post(
    "/",
    auth(ADMIN, SUPER_ADMIN),
    validateRequest(ZCreateTreatment),
    createTreatment
  )
  .get("/", getTreatments);

export const TreatmentRoutes = router;
