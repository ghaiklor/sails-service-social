var Promise = require('bluebird');
var fb = require('fb');

/**
 * Facebook class
 * @param {Object} config Config with userId and accessToken properties
 * @constructor
 */
function Facebook(config) {
  if (!(config || config.userId || config.accessToken)) {
    throw new Error('You must provide userId and accessKey');
  }

  this.setUserId(config.userId);
  this.setAccessToken(config.accessToken);
}

Facebook.prototype = Object.create({
  constructor: Facebook,

  /**
   * Get facebook friends
   * @returns {Promise}
   */
  getFriends: function () {
    fb.setAccessToken(this.getAccessToken());

    return new Promise(function (resolve, reject) {
      fb.api(this.getUserId() + '/friends', function (response) {
        return response.error ? reject(response.error) : resolve(response.data);
      });
    }.bind(this));
  },

  /**
   * Get user's facebook id
   * @returns {String}
   */
  getUserId: function () {
    return this.userId;
  },

  /**
   * Set new user's facebook id
   * @param {String} id User's facebook id
   * @returns {Facebook}
   */
  setUserId: function (id) {
    this.userId = id;
    return this;
  },

  /**
   * Get current access token
   * @returns {String}
   */
  getAccessToken: function () {
    return this.accessToken;
  },

  /**
   * Set new facebook access token
   * @param {String} token New facebook access token
   * @returns {Facebook}
   */
  setAccessToken: function (token) {
    this.accessToken = token;
    return this;
  }
});

module.exports = Facebook;
