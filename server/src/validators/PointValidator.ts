import { Joi, Segments } from 'celebrate';

export const index = {
  [Segments.QUERY]: Joi.object().keys({
    city: Joi.string().required(),
    uf: Joi.string().required(),
    items: Joi.string()
      .regex(/^\d+(,\d+)*$/)
      .required(),
  }),
};

export const show = {
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().min(1).required(),
  }),
};

export const store = {
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required(),
    whatsapp: Joi.string().required(),
    latitude: Joi.string().required(),
    longitude: Joi.string().required(),
    city: Joi.string().required(),
    uf: Joi.string().required(),
    items: Joi.array().items(Joi.number()).default([]),
  }),
};
