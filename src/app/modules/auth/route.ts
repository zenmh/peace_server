import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { ZSignIn, ZSignUp } from "./validation";
import { AuthController } from "./controller";

const router = Router();
const { signUp, signIn } = AuthController;

router
  .post("/signup", validateRequest(ZSignUp), signUp)
  .post("/signin", validateRequest(ZSignIn), signIn);

export const AuthRoutes = router;
