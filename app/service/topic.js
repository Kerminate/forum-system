'use strict'

const Service = require('egg').Service

class TopicService extends Service {
  async list () {
    const { ctx } = this
    return ctx.model.Topic.find({}).exec()
  }

  async create (query) {
    const { ctx } = this
    const topic = new ctx.model.Topic({
      title: query.title,
      tag: query.tag,
      content: query.content,
      author_id: query.userId
    })
    return topic.save()
  }
}
module.exports = TopicService
