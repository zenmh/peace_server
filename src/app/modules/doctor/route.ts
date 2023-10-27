import { Router } from "express";
import { DoctorController } from "./controller";
import validateRequest from "../../middlewares/validateRequest";
import { ZCreateDoctor } from "./validation";

const router = Router();
const { createDoctor } = DoctorController;

router.post("/", validateRequest(ZCreateDoctor), createDoctor);

export const DoctorRoutes = router;
