import { Response } from "express";
import { ApplicationException } from "../exceptions/application.exception";

export abstract class BaseController {
  handleException(err: any, res: Response) {
    if (err instanceof ApplicationException) {
      res.status(400).json({
        msg: err.message,
      });
    } else {
      throw new Error(err);
    }
  }
}
