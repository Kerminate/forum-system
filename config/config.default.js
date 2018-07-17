'use strict';

module.exports = appInfo => {
  const config = {};

  config.name = 'Forum';
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1531043523227_2871';

  // add your config here
  config.middleware = [];

  config.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1:27017/forum',
      options: {
        useNewUrlParser: true,
      },
    },
  };
  config.security = {
    domainWhiteList: [ '' ],
    csp: {
      enable: false,
    },
    csrf: {
      enable: false,
      // useSession: false, // if useSession set to true, the secret will keep in session instead of cookie
      // ignoreJSON: false, // skip check JSON requests if ignoreJSON set to true
      // cookieName: 'csrfToken', // csrf token's cookie name
      // sessionName: 'csrfToken', // csrf token's session name
      // headerName: 'x-csrf-token', // request csrf token's name in header
      // bodyName: '_csrf', // request csrf token's name in body
      // queryName: '_csrf', // request csrf token's name in query
    },
  };

  return config;
};
