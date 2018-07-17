'use strict'

const Controller = require('egg').Controller

class UserController extends Controller {
  async list () {
    const { ctx } = this
    const list = await ctx.service.user.list()
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
    await ctx.service.user.create(body)
    ctx.body = {
      msg: 'register success'
    }
  }

  async login () {
    const { ctx } = this
    const { body } = ctx.request
    if (!body.username || !body.password) {
      return this.logger.error('您请求的参数不完整！')
    }

    const user = await ctx.service.user.findOne('username', body.username)
    if (!user) {
      return this.logger.error('该用户名不存在')
    }
    if (user.password !== body.password) {
      return this.logger.error('密码错误')
    }
    ctx.session.user = user.toObject()
    ctx.body = {
      msg: 'login success'
    }
  }

  async logout () {
    const { ctx } = this
    ctx.session.user = null
  }
}

module.exports = UserController
