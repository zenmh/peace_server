import { User } from "@prisma/client";

interface ISingUp {
  email: string;
  password: string;
}

type ISignInResponse = {
  accessToken: string;
  refreshToken?: string;
};

type ISignUpResponse = {
  result: User;
} & ISignInResponse;

export { ISingUp, ISignInResponse, ISignUpResponse };
