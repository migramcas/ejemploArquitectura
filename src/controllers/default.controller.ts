import { Request, Response } from "express";
import { GET, route } from "awilix-express";
import { TestService } from "../service/test.service";

@route("/") //la ruta de ese controlador es  /
export class DefaultController {
  constructor(private readonly testService: TestService) {}

  @GET()
  public index(req: Request, res: Response): void {
    res.status(200).json({
      from: "default controller",
      node_env: process.env.NODE_ENV,
    });
  }
}
