'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    const { ctx } = this;
    const users = await ctx.model.User.find({});
    console.log(users);
    ctx.body = users;
  }
  async create() {
    const { ctx } = this;
    const { body } = ctx.request;
    console.log(body);
    const user = new ctx.model.User({
      username: body.username,
      password: body.password,
      email: body.email,
    });
    console.log(user);
    await user.save();
    ctx.body = 'register success';
  }
}

module.exports = UserController;
