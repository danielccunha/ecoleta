import { Request, Response } from 'express';
import omit from 'lodash/omit';
import knex from '../database/connection';

class PointController {
  async index(request: Request, response: Response): Promise<Response> {
    const { city, uf, items } = request.query;

    // Map received items to numbers array
    const parsedItems = String(items)
      .split(',')
      .map((item) => Number(item.trim()));

    // Filter points by received items, UF and city
    const points = await knex('points')
      .join('point_items', 'points.id', '=', 'point_items.point_id')
      .whereIn('point_items.item_id', parsedItems)
      .where('city', String(city).trim())
      .where('uf', String(uf).trim())
      .select('points.*')
      .distinct();

    return response.json(points);
  }

  async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    // Search point by its id
    const point = await knex('points').where('id', id).first();

    // Verify if point exists
    if (!point) {
      return response.status(404).json({ error: 'Point not found.' });
    }

    // Search point items
    const items = await knex('items')
      .join('point_items', 'items.id', '=', 'point_items.item_id')
      .where('point_items.point_id', id)
      .select('items.*');

    // Return found point with its items
    return response.json({
      ...point,
      items,
    });
  }

  async store(request: Request, response: Response): Promise<Response> {
    // Doesn't need to do object destructuring because celebrate is already validating the properties.
    // In case user send more properties than request, it will fail
    const { body } = request;
    const dto = {
      ...body,
      image: request.file.filename,
    };

    // Start the transaction
    const trx = await knex.transaction();

    // Insert the point to the database omitting items property
    const [pointId] = await trx('points').insert(omit(dto, 'items'));

    // Map items to point_item object
    const pointItems = dto.items.split(',').map((itemId: string) => ({
      item_id: Number(itemId.trim()),
      point_id: pointId,
    }));

    // Finally, insert items to the database and commit the transaction
    await trx('point_items').insert(pointItems);
    await trx.commit();

    // Return created point with its id
    return response.json({
      id: pointId,
      ...dto,
    });
  }
}

export default new PointController();
