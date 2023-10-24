import { compare, hash } from "bcrypt";
import config from "../config";

const hashPassword = async (password: string): Promise<string> =>
  await hash(password, Number(config.bcrypt_slat_rounds));

const matchPassword = async (
  givenPassword: string,
  savedPassword: string
): Promise<boolean> => await compare(givenPassword, savedPassword);

export { hashPassword, matchPassword };
