import { Request, Response } from "express";
import { GET, POST, PUT, route } from "awilix-express";
import { SubscriptionService } from "../service/subscription.service";
import {
  SubscriptionCreateDto,
  SubscriptionUpdateDto,
} from "../dtos/subscription.dto";
import { BaseController } from "../common/controllers/base.controller";

@route("/subscriptions")
export class SubscriptionController extends BaseController {
  constructor(private readonly subscriptionService: SubscriptionService) {
    super();
  }

  @GET()
  public async all(req: Request, res: Response) {
    try {
      res.status(200).json({
        data: await this.subscriptionService.all(),
      });
    } catch (error) {
      this.handleException(error, res);
    }
  }

  @route("/:id")
  @GET()
  public async find(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);

      const result = await this.subscriptionService.find(id);
      if (result) {
        res.status(200).json({
          data: result,
        });
      } else {
        res.status(404).json({
          msg: "Not found",
        });
      }
    } catch (error) {
      this.handleException(error, res);
    }
  }

  @POST()
  public async store(req: Request, res: Response) {
    const { user_id, code, amount, cron } = req.body;
    try {
      const response = await this.subscriptionService.store({
        user_id: user_id,
        code: code,
        amount: amount,
        cron: cron,
      } as SubscriptionCreateDto);

      res.status(201).json({
        data: response,
      });
    } catch (error) {
      this.handleException(error, res);
    }
  }

  @route("/:id")
  @PUT()
  public async update(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);

      res.status(200).json({
        data: await this.subscriptionService.update(id, {
          code: req.body.code,
          amount: req.body.amount,
          cron: req.body.cron,
        } as SubscriptionUpdateDto),
      });
    } catch (error) {
      this.handleException(error, res);
    }
  }

  @route("/:id")
  @PUT()
  public async remove(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);

      res.status(200).json({
        data: await this.subscriptionService.remove(id),
      });
    } catch (error) {
      this.handleException(error, res);
    }
  }
}
