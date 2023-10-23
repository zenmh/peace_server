import dotenv from "dotenv";

dotenv.config();

const pnv = process.env;

export default {
  env: pnv.NODE_ENV,
  port: pnv.PORT,
};
