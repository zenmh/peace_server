import { JwtPayload, Secret, sign, verify } from "jsonwebtoken";
import config from "../config";

const createToken = (
  payload: Record<string, unknown>,
  secret: Secret,
  expireTime: string
): string =>
  sign(payload, secret, {
    expiresIn: expireTime,
  });

const verifyToken = (token: string, secret: Secret): JwtPayload =>
  verify(token, secret) as JwtPayload;

const createAccessToken = async (
  userId: string,
  role: string
): Promise<string> =>
  createToken(
    { userId, role },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );

const createRefreshToken = async (
  userId: string,
  role: string
): Promise<string> =>
  createToken(
    { userId, role },
    config.jwt.refresh_secret as Secret,
    config.jwt.refresh_expires_in as string
  );

export { createAccessToken, createRefreshToken, verifyToken };
