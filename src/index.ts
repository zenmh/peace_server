import { Server } from "http";
import app from "./app";
import config from "./config";

const run = () => {
  try {
    const server: Server = app.listen(config.port, () =>
      console.log(`Peace Running On http://localhost:${config.port}`)
    );

    const exitHandler = () => {
      if (server) server.close(() => console.log("Server Closed."));

      process.exit(1);
    };

    const unexpectedErrorHandlar = (err: unknown) => {
      console.log(err);
      exitHandler();
    };

    process.on("uncaughtException", unexpectedErrorHandlar);
    process.on("unhandledRejection", unexpectedErrorHandlar);

    process.on("SIGTERM", () => {
      console.log("SIGTERM Received !!");
      if (server) server.close();
    });
  } catch (err) {
    console.log(err);
  }
};

run();
