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

  async register () {
    const { ctx } = this
    const { body } = ctx.request
    if (!body.username || !body.password || !body.email) {
      return this.logger.error('您请求的参数不完整！')
    }
    let user = await ctx.service.user.findOne('username', body.username)
    if (user) {
      return this.logger.error('该用户名已经被注册了')
    }
    user = await ctx.service.user.findOne('email', body.email)
    if (user) {
      return this.logger.error('该邮箱已经被注册了')
    }
    await ctx.service.user.register(body)
    ctx.body = {
      msg: 'register success'
    }
  }

  async create () {
    const { ctx } = this
    const { body } = ctx.request
    if (!body.title || !body.tag || !body.content) {
      return ctx.error('您请求的参数不完整！')
    }
    const userId = ctx.session.user._id
    const query = { ...body, userId }
    const topic = await ctx.service.topic.register(query)
    ctx.body = {
      msg: 'topic create success'
    }

    // if (topic) {
    //   // 更新用户主题数
    //   let User = ctx.model('user')
    //   let user = await User.updateTopicCount(userId, 1)
    //   // 更新session
    //   ctx.session.user = user.toObject()
    //   ctx.success({
    //     topic_id: topic._id
    //   })
    // } else {
    //   ctx.error('出现错误，保存失败！')
    // }
  }
}

module.exports = TopicController
