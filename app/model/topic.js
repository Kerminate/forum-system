'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const ObjectId = Schema.ObjectId; // 主键

  const TopicSchema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author_id: { type: ObjectId, required: true },
    reply_count: { type: Number, default: 0 },
    visit_count: { type: Number, default: 0 },
    last_reply: { type: ObjectId },
    last_reply_at: { type: Date, default: Date.now },
    tag: { type: String },
    create_time: { type: Date, default: Date.now },
    update_time: { type: Date, default: Date.now },
    deleted: { type: Boolean, default: false },
    top: { type: Boolean, default: false }, // 置顶帖
    good: { type: Boolean, default: false }, // 精华帖
  });

  TopicSchema.index({ create_time: -1 }); // -1 为降序， 1 为升序
  TopicSchema.index({ author_id: 1, create_time: -1 }); // 2 个键的复合索引

  return mongoose.model('Topic', TopicSchema);
};
