import { Router } from "express";
import { AuthRoutes } from "./modules/auth/route";

const router = Router();

[{ path: "/auth", route: AuthRoutes }].forEach(({ path, route }) =>
  router.use(path, route)
);

export const routes = router;
