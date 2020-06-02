import express from "express";
import * as controllers from "./controllers";

const routes = express.Router();

// Items
routes.get("/items", controllers.Items.index);

// Points
routes.get("/points", controllers.Points.index);
routes.get("/points/:id", controllers.Points.show);
routes.post("/points", controllers.Points.store);

export default routes;
