import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { ZCreateTreatment } from "./validation";
import { TreatmentController } from "./controller";

const router = Router();
const { createTreatment } = TreatmentController;

router.post("/", validateRequest(ZCreateTreatment), createTreatment);

export const TreatmentRoutes = router;
