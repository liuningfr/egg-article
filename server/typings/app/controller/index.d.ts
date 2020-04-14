// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportArticle = require('../../../app/controller/article');
import ExportHome = require('../../../app/controller/home');
import ExportProduct = require('../../../app/controller/product');

declare module 'egg' {
  interface IController {
    article: ExportArticle;
    home: ExportHome;
    product: ExportProduct;
  }
}
