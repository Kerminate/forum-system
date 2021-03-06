'use strict'

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app
  router.get('/', controller.home.index)
  router.post('/register', controller.user.register)
  router.post('/login', controller.user.login)
  router.del('/logout', controller.user.logout)
  router.get('/user/list', controller.user.list)

  router.get('/topic/list', controller.topic.list)
}
