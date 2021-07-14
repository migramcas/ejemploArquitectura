import { Request, Response } from "express";
import { GET, route } from "awilix-express";
import { TestService } from "../service/test.service";

@route("/check") //la ruta de ese controlador es  /
export class DefaultController {
  constructor(private readonly testService: TestService) {} //inyección de dependencia

  @GET() //responde a ruta principal (/check)
  public index(req: Request, res: Response): void {
    res.status(200).json({
      from: "check controller /check",
      node_env: process.env.NODE_ENV,
    });
  }

  @route("/test/:id") // la ruta para este es /check/test/:id
  @GET()
  public test(req: Request, res: Response): void {
    const { id } = req.params;
    res.status(200).json({
      from: "check controller /test",
      get: this.testService.get(),
      id,
    });
  }
}
