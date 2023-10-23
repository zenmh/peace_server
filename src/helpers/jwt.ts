import { JwtPayload, Secret, sign, verify } from "jsonwebtoken";

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

export { createToken, verifyToken };
