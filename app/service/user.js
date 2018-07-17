'use strict'

const Service = require('egg').Service

class UserService extends Service {
  async list () {
    const { ctx } = this
    return ctx.model.User.find({}).exec()
  }

  async create (query) {
    const { ctx } = this
    const user = new ctx.model.User({
      username: query.username,
      password: query.password,
      email: query.email
    })
    return user.save()
  }

  async findOne (param, query) {
    const { ctx } = this
    return ctx.model.User.findOne({ [param]: query })
  }

  async updateTopicCount (userId, num) {
    const { ctx, app } = this
    const user = await ctx.model.User.findOne({ _id: userId })
    user.topic_count += num
    // 增加减少积分
    user.score += num > 0 ? app.config.score.topic : -app.config.score.topic
    return user.save()
  }
}
module.exports = UserService
