var fb = require('fb');
var Promise = require('bluebird');
var util = require('util');
var BaseSocial = require('./BaseSocial');

util.inherits(FacebookSocial, BaseSocial);

/**
 * Facebook class
 * @param {Object} [_config]
 * @constructor
 */
function FacebookSocial(_config) {
  BaseSocial.apply(this, arguments);

  this.setProvider(fb);
}

/**
 * Get friends from Facebook
 * @param [_config]
 * @returns {Promise}
 */
FacebookSocial.prototype.getFriends = function (_config) {
  var config = _config || {};

  this.getProvider().setAccessToken(this.get('accessToken') || config.accessToken);

  return new Promise(function (resolve, reject) {
    this.getProvider().api('me/friends', function (response) {
      return response.error ? reject(response.error) : resolve(response.data);
    });
  }.bind(this));
};

/**
 * Get photos from Facebook
 * @param [_config]
 * @returns {Promise}
 */
FacebookSocial.prototype.getPhotos = function (_config) {
  var config = _config || {};

  this.getProvider().setAccessToken(this.get('accessToken') || config.accessToken);

  return new Promise(function (resolve, reject) {
    this.getProvider().api('me/photos', function (response) {
      return response.error ? reject(response.error) : resolve(response.data);
    });
  }.bind(this));
};

module.exports = FacebookSocial;
