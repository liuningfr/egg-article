'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/product', controller.product.index);
  router.get('/product/detail', controller.product.detail);
  router.get('/product/detail2/:id', controller.product.detail2);
  router.post('/product/create', controller.product.create);

  router.post('/article/create', controller.article.create);
  router.get('/article/list', controller.article.list);
  router.get('/article/detail/:id', controller.article.detail);

};
