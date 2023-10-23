import dotenv from "dotenv";

dotenv.config();

const pnv = process.env;

export default {
  env: pnv.NODE_ENV,
  port: pnv.PORT,
  jwt: {
    jwt_secret: pnv.JWT_SECRET,
    jwt_expires_in: pnv.JWT_EXPIRES_IN,
    jwt_refresh_secret: pnv.JWT_REFRESH_SECRET,
    jwt_refresh_expires_in: pnv.JWT_REFRESH_EXPIRES_IN,
  },
};
