import express from 'express';
import * as controllers from './controllers';
import * as validators from './validators';

const routes = express.Router();

// Items
routes.get('/items', controllers.Item.index);

// Points
routes.get('/points', validators.Point.index, controllers.Point.index);
routes.get('/points/:id', validators.Point.show, controllers.Point.show);
routes.post('/points', validators.Point.store, controllers.Point.store);

export default routes;
