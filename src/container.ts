import express from "express";
import { createContainer, asClass } from "awilix";
import { TestService } from "./service/test.service";
import { scopePerRequest } from "awilix-express";
import { SubscriptionMySQLRepository } from "./service/repositories/implementation/mysql/susbscriptionMySQL.repository";
import { SubscriptionService } from "./service/subscription.service";

export default (app: express.Application) => {
  const container = createContainer({
    injectionMode: "CLASSIC",
  });

  container.register({
    //repositories
    subscriptionRepository: asClass(SubscriptionMySQLRepository).scoped(),

    //services
    subscriptionService: asClass(SubscriptionService).scoped(),
    testService: asClass(TestService).scoped(),
  });

  app.use(scopePerRequest(container));
};
