import { Router } from "express";
import { AuthRoutes } from "./modules/auth/route";
import { DoctorRoutes } from "./modules/doctor/route";

const router = Router();

[
  { path: "/auth", route: AuthRoutes },
  { path: "/doctors", route: DoctorRoutes },
].forEach(({ path, route }) => router.use(path, route));

export const routes = router;
