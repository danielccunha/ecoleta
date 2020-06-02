import pick from "lodash/pick";
import omit from "lodash/omit";
import { Request, Response } from "express";
import knex from "../database/connection";

class PointController {
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

    return response.status(201).send();
  }
}

export default new PointController();
