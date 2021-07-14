import express, { Application } from "express";
import loadContainer from "./container";
import { loadControllers } from "awilix-express"; //carga todos los controladores de /controllers

const app: Application = express();

//configura app con json
app.use(express.json());

//container con todas las dependencias
loadContainer(app);

//controllers
app.use(loadControllers("controllers/*.ts", { cwd: __dirname }));

export { app };
