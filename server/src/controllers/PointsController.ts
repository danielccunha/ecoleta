import pick from "lodash/pick";
import omit from "lodash/omit";
import { Request, Response } from "express";
import knex from "../database/connection";

class PointController {
  async index(request: Request, response: Response): Promise<Response> {
    const { city, uf, items } = request.query;
    const parsedItems = String(items)
      .split(",")
      .map((item) => Number(item.trim()));

    const points = await knex("points")
      .join("point_items", "points.id", "=", "point_items.point_id")
      .whereIn("point_items.item_id", parsedItems)
      .where("city", String(city).trim())
      .where("uf", String(uf).trim())
      .select("points.*")
      .distinct();

    return response.json(points);
  }

  async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    // Search point by its id
    const point = await knex("points").where("id", id).first();

    // Verify if point exists
    if (!point) {
      return response.status(404).json({ error: "Point not found." });
    }

    // Search point items
    const items = await knex("items")
      .join("point_items", "items.id", "=", "point_items.item_id")
      .where("point_items.point_id", id)
      .select("items.*");

    // Return found point with its items
    return response.json({
      ...point,
      items,
    });
  }

  async store(request: Request, response: Response): Promise<Response> {
    const dto = pick(
      request.body,
      "name",
      "email",
      "whatsapp",
      "latitude",
      "longitude",
      "city",
      "uf",
      "items"
    );

    const trx = await knex.transaction();
    const [point_id] = await trx("points").insert({
      image: "tmp_image",
      ...omit(dto, "items"),
    });

    const pointItems = dto.items.map((item_id: number) => ({
      item_id,
      point_id,
    }));
    await trx("point_items").insert(pointItems);
    await trx.commit();

    return response.json({
      id: point_id,
      ...dto,
    });
  }
}

export default new PointController();
