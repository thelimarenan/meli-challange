import { Server } from "@overnightjs/core";
import * as bodyParser from "body-parser";

import loader from "../bootstrap/Loader";
import * as controllers from "../controllers";

class ServerService extends Server {

  private readonly SERVER_STARTED = "Server started on port: ";

  constructor() {
    super(true);
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.setupControllers();
  }

  /**
   * Starts the aplication
   *
   * @param {number} port Number port
   */
  public start(port: number): void {
    this.app.get("/", (req, res) => {
      res.send(this.SERVER_STARTED + port);
    });
    this.app.listen(port);
  }

  /**
   * Mats the controllers
   */
  private setupControllers(): void {
    const ctlrInstances: any = [];
    for (const name in controllers) {
      if (!controllers.hasOwnProperty(name)) {
        continue;
      }
      const controller: string =
        name[0].toLowerCase() + name.slice(1, name.length) + "Controller";

      ctlrInstances.push(loader.resolve(controller));
    }
    super.addControllers(ctlrInstances);
  }
}

export default ServerService;
