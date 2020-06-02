import express from "express";
import knex from "./database/connection";
import ItemController from "./controllers/ItemController";
import PointController from "./controllers/PointController";

const routes = express.Router();

// Items
routes.get("/items", ItemController.index);

// Points
routes.post("/points", PointController.store);

export default routes;
