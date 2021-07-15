import express from "express";
import { createContainer, asClass } from "awilix";
import { TestService } from "./service/test.service";
import { scopePerRequest } from "awilix-express";
import { SubscriptionMySQLRepository } from "./service/repositories/implementation/mysql/susbscriptionMySQL.repository";
import { MovementMySQLRepository } from "./service/repositories/implementation/mysql/movement.repository";
import { BalanceMySQLRepository } from "./service/repositories/implementation/mysql/balance.repository";
import { SubscriptionService } from "./service/subscription.service";
import { MovementService } from "./service/movement.service";

export default (app: express.Application) => {
  const container = createContainer({
    injectionMode: "CLASSIC",
  });

  container.register({
    //repositories
    subscriptionRepository: asClass(SubscriptionMySQLRepository).scoped(),
    movementRepository: asClass(MovementMySQLRepository).scoped(),
    balanceRepository: asClass(BalanceMySQLRepository).scoped(),

    //services
    subscriptionService: asClass(SubscriptionService).scoped(),
    movementService: asClass(MovementService).scoped(),
    testService: asClass(TestService).scoped(),
  });

  app.use(scopePerRequest(container));
};
