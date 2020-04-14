'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { app } = this;
    const res = await app.mysql.select('article');
    console.log(res);
  }
}

module.exports = HomeController;
