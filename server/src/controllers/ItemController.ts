import { Request, Response } from "express";
import knex from "../database/connection";

class ItemController {
  async index(request: Request, response: Response): Promise<Response> {
    const items = await knex("items").select("*");
    return response.json(items);
  }
}

export default new ItemController();
