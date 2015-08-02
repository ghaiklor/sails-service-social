var fb = require('fb');
var _ = require('lodash');
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
 * Get profile from Facebook
 * @param {String} [_accessToken] Facebook access token
 * @param {Object} [_config] Additional config for request
 * @returns {Promise}
 */
FacebookSocial.prototype.getProfile = function (_accessToken, _config) {
  var accessToken = _accessToken || this.get('accessToken') || '';
  var config = _.merge({fields: ['id', 'name', 'email']}, _.omit(this.get(), 'accessToken'), _config);

  this.getProvider().setAccessToken(accessToken);

  return new Promise(function (resolve, reject) {
    this.getProvider().api('me', config, function (response) {
      return response.error ? reject(response.error) : resolve(response.data);
    });
  }.bind(this));
};

/**
 * Get friends from Facebook
 * @param {String} [_accessToken] Facebook access token
 * @param {Object} [_config] Additional config for request
 * @returns {Promise}
 */
FacebookSocial.prototype.getFriends = function (_accessToken, _config) {
  var accessToken = _accessToken || this.get('accessToken') || '';
  var config = _.merge({}, _.omit(this.get(), 'accessToken'), _config);

  this.getProvider().setAccessToken(accessToken);

  return new Promise(function (resolve, reject) {
    this.getProvider().api('me/friends', config, function (response) {
      return response.error ? reject(response.error) : resolve(response.data);
    });
  }.bind(this));
};

/**
 * Get photos from Facebook
 * @param {String} [_accessToken] Facebook access token
 * @param {Object} [_config] Additional config for request
 * @returns {Promise}
 */
FacebookSocial.prototype.getPhotos = function (_accessToken, _config) {
  var accessToken = _accessToken || this.get('accessToken') || '';
  var config = _.merge({}, _.omit(this.get(), 'accessToken'), _config);

  this.getProvider().setAccessToken(accessToken);

  return new Promise(function (resolve, reject) {
    this.getProvider().api('me/photos', config, function (response) {
      return response.error ? reject(response.error) : resolve(response.data);
    });
  }.bind(this));
};

/**
 * Get posts from Facebook
 * @param {String} [_accessToken] Facebook access token
 * @param {Object} [_config] Additional config for request
 * @returns {Promise}
 */
FacebookSocial.prototype.getPosts = function (_accessToken, _config) {
  var accessToken = _accessToken || this.get('accessToken') || '';
  var config = _.merge({}, _.omit(this.get(), 'accessToken'), _config);

  this.getProvider().setAccessToken(accessToken);

  return new Promise(function (resolve, reject) {
    this.getProvider().api('me/posts', config, function (response) {
      return response.error ? reject(response.error) : resolve(response.data);
    });
  }.bind(this));
};

module.exports = FacebookSocial;
