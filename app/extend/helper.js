'use strict';

module.exports = {
  isLogined: session => {
    return session != null && session.user != null;
  },
};
