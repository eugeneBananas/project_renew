const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');

const { login } = require('../controllers/users');

router.post(
  '/',
  celebrate({
    body: Joi.object().keys({
      email: Joi.string()
        .required()
        .pattern(/^\S+@\S+\.\S+$/),
      password: Joi.string().required().min(6),
    }),
  }),
  login,
);

module.exports = router;
