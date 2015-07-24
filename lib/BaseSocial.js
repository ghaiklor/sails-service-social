var _ = require('lodash');

/**
 * Create base social instance
 * @param {Object} [_config]
 * @constructor
 */
function BaseSocial(_config) {
  this._config = {};

  _.forOwn(_config, function (value, key) {
    this.set(key, value);
  }.bind(this));
}

/**
 * Get configuration value
 * @param {String} [path]
 * @returns {*}
 */
BaseSocial.prototype.get = function (path) {
  return typeof path === 'undefined' ? this._config : _.get(this._config, path);
};

/**
 * Set configuration value
 * @param {String} path
 * @param {*} value
 * @returns {BaseSocial}
 */
BaseSocial.prototype.set = function (path, value) {
  _.set(this._config, path, value);
  return this;
};

/**
 * Get provider for sending notifications
 * @returns {*}
 */
BaseSocial.prototype.getProvider = function () {
  return this._provider;
};

/**
 * Set new provider to this pusher
 * @param {*} provider
 * @returns {BaseSocial}
 */
BaseSocial.prototype.setProvider = function (provider) {
  this._provider = provider;
  return this;
};

BaseSocial.prototype.friends = _;
BaseSocial.prototype.photos = _;

module.exports = BaseSocial;
