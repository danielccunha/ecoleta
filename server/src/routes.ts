import express from 'express';

import multer from 'multer';
import multerConfig from './config/multer';

import * as controllers from './controllers';
import * as validators from './validators';

const routes = express.Router();
const upload = multer(multerConfig);

// Items
routes.get('/items', controllers.Item.index);

// Points
routes.get('/points', validators.Point.index, controllers.Point.index);
routes.get('/points/:id', validators.Point.show, controllers.Point.show);
routes.post(
  '/points',
  upload.single('image'),
  validators.Point.store,
  controllers.Point.store
);

export default routes;
