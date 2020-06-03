import { celebrate } from 'celebrate';
import * as PointValidator from './PointValidator';

export const Point = {
  index: celebrate(PointValidator.index),
  show: celebrate(PointValidator.show),
  store: celebrate(PointValidator.store),
};
