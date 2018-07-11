'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = '检验git切换账号是否成功';
  }
}

module.exports = HomeController;
