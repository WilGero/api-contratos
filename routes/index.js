const express = require('express');

const productsRouter = require('./products.router');
const categoriesRouter = require('./categories.router');
const usersRouter = require('./users.router');
const orderRouter = require('./orders.router');
const institutionRouter = require('./institutions.router');
const contratoRouter = require('./contratos.router');
const stateContratoRouter = require('./state-contrato.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);
  router.use('/users', usersRouter);
  router.use('/orders', orderRouter);
  router.use('/institutions', institutionRouter);
  router.use('/contratos', contratoRouter);
  router.use('/state-contratos', stateContratoRouter);
}

module.exports = routerApi;
