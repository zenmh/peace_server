import { NextFunction, Request, Response } from "express";
import { Secret } from "jsonwebtoken";
import ApiError from "../../errors/ApiError";
import config from "../../config";
import { verifyToken } from "../../helpers/jwt";

const auth =
  (...requiredRoles: string[]) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization;

      if (!token) throw new ApiError(401, "You are not authorized !!");

      const verifiedUser = verifyToken(token, config.jwt.secret as Secret);

      req.user = verifiedUser;

      if (requiredRoles.length && !requiredRoles.includes(verifiedUser.role))
        throw new ApiError(403, "User forbidden !!");

      next();
    } catch (error) {
      next(error);
    }
  };

export default auth;
