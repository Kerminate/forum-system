'use strict';

module.exports = () => {
  // 验证用户是否登录
  return async (ctx, next) => {
    if (!ctx.session || ctx.session.user == null) ctx.throw(401, 'Login required');
    await next();
  };
};
