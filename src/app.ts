import bodyParser from "body-parser";
import { config } from "./utils/config";
import express from "express";
import DB from "./utils/db";
import Logger from "./utils/logger";
import { routes as routesAPIv1 } from "./routes/v1";
import morganMiddleware from "./middlewares/morgan";

class Server {
  app = express();
  port = config.PORT;

  start() {

    this.app.use(bodyParser.json());
    this.app.use(morganMiddleware);
    this.app.use("/v1", routesAPIv1);
    this.app.listen(this.port, async () => {
      Logger.debug(`listening to port:${this.port}`);
      new DB(config.DATABASE_URL).init();
    });
  }
}

export const server = new Server();