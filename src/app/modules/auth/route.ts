import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { ZSignUp } from "./validation";
import { AuthController } from "./controller";

const router = Router();
const { signUp } = AuthController;

router.post("/signup", validateRequest(ZSignUp), signUp);

export const AuthRoutes = router;
