module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const UserSchema = new Schema({
    username: { type: String, required: true},  
    password: { type: String, required: true},
    email: { type: String, required: true },
    home: {type: String},   // 个人主页
    github: {type: String},  // github
    avatar: { type: String },  // 头像
    score: {type: Number, default: 0}, // 用户积分
    signature: {type: String, default: "无个性，不签名！"}, // 个性签名
    topic_count: { type: Number, default: 0 },
    reply_count: { type: Number, default: 0 },
    create_time: { type: Date, default: Date.now }
  });

  return mongoose.model('User', UserSchema);
}