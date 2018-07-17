'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async list() {
    const { ctx } = this;
    return ctx.model.User.find({}).exec();
  }

  async create(query) {
    const { ctx } = this;
    const user = new ctx.model.User({
      username: query.username,
      password: query.password,
      email: query.email,
    });
    return user.save();
  }

  async findOne(param, query) {
    const { ctx } = this;
    return ctx.model.User.findOne({ [param]: query });
  }
}
module.exports = UserService;
