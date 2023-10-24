import { Prisma } from "@prisma/client";
import { IGenericErrorMessage } from "../interfaces/common";

const handleClientError = (error: Prisma.PrismaClientKnownRequestError) => {
  let errors: IGenericErrorMessage[] = [];
  let message;

  if (error.code === "P2025") {
    message = (error.meta?.message as string) || "Record not found !!";
    errors = [{ path: "", message }];
  } else if (
    error.code === "P2003" &&
    error.message.includes("delete()` invocation:")
  ) {
    message = "Delete failed !!";
    errors = [{ path: "", message }];
  } else if (error.code === "P2002") {
    if (error.message) {
      message = error.message;
      errors = [{ path: "", message }];
    }
  }

  return {
    statusCode: 400,
    message,
    errorMessages: errors,
  };
};

export default handleClientError;
