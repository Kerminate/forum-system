'use strict'

const Controller = require('egg').Controller

class TopicController extends Controller {
  async list () {
    const { ctx } = this
    const list = await ctx.service.topic.list()
    ctx.body = {
      list
    }
  }

  async create () {
    const { ctx } = this
    const { body } = ctx.request
    if (!body.title || !body.content) {
      return this.logger.error('您请求的参数不完整！')
    }
    const userId = ctx.session.user._id
    const query = { ...body, userId }
    const topic = await ctx.service.topic.create(query)

    if (topic) {
      // 更新用户主题数
      const user = ctx.service.user.updateTopicCount(userId, 1)
      // 更新session
      ctx.session.user = user.toObject()
    } else {
      return this.logger.error('出现错误，保存失败！')
    }
    ctx.body = {
      msg: 'topic create success'
    }
  }
}

module.exports = TopicController
