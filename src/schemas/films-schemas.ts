import Joi from "joi";

export const filmsSchema = Joi.object({
  name: Joi.string().required(),
  platform: Joi.string().valid("Netflix", "Prime").required(),
  gender: Joi.string().required(),
  status: Joi.string().valid("Assistido", "Não assistido").required(),
  note: Joi.number().min(0).max(10),
  summary: Joi.string(),
});
