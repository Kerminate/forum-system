'use strict';

module.exports = appInfo => {
  const config = exports = {};

  config.name = 'Forum'
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1531043523227_2871';

  // add your config here
  config.middleware = [];

  config.mongoose = {
    url: 'mongodb://127.0.0.1/forum',
    options: {}
  }

  return config;
};
