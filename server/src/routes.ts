import express from "express";
import * as controllers from "./controllers";

const routes = express.Router();

// Items
routes.get("/items", controllers.Item.index);

// Points
routes.get("/points", controllers.Point.index);
routes.get("/points/:id", controllers.Point.show);
routes.post("/points", controllers.Point.store);

export default routes;
