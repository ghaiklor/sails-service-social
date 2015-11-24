import _ from 'lodash';
import fb from 'fb';
import BaseSocial from './BaseSocial';

export default class FacebookSocial extends BaseSocial {
  constructor(config) {
    super(config);

    this.setProvider(fb);
  }

  /**
   * Get profile from Facebook
   * @param {String} [_accessToken] Facebook access token
   * @param {Object} [_config] Additional config for request
   * @returns {Promise}
   */
  getProfile(_accessToken, _config) {
    let accessToken = _accessToken || this.get('accessToken') || '';
    let config = _.merge({fields: ['id', 'name', 'email']}, _.omit(this.get(), 'accessToken'), _config);

    this.getProvider().setAccessToken(accessToken);

    return new Promise((resolve, reject) => {
      this.getProvider().api('me', config, response => response.error ? reject(response.error) : resolve(response));
    });
  }

  /**
   * Get friends from Facebook
   * @param {String} [_accessToken] Facebook access token
   * @param {Object} [_config] Additional config for request
   * @returns {Promise}
   */
  getFriends(_accessToken, _config) {
    let accessToken = _accessToken || this.get('accessToken') || '';
    let config = _.merge({}, _.omit(this.get(), 'accessToken'), _config);

    this.getProvider().setAccessToken(accessToken);

    return new Promise((resolve, reject) => {
      this.getProvider().api('me/friends', config, response => response.error ? reject(response.error) : resolve(response.data));
    });
  }

  /**
   * Get photos from Facebook
   * @param {String} [_accessToken] Facebook access token
   * @param {Object} [_config] Additional config for request
   * @returns {Promise}
   */
  getPhotos(_accessToken, _config) {
    let accessToken = _accessToken || this.get('accessToken') || '';
    let config = _.merge({}, _.omit(this.get(), 'accessToken'), _config);

    this.getProvider().setAccessToken(accessToken);

    return new Promise((resolve, reject) => {
      this.getProvider().api('me/photos', config, response => response.error ? reject(response.error) : resolve(response.data));
    });
  }

  /**
   * Get posts from Facebook
   * @param {String} [_accessToken] Facebook access token
   * @param {Object} [_config] Additional config for request
   * @returns {Promise}
   */
  getPosts(_accessToken, _config) {
    let accessToken = _accessToken || this.get('accessToken') || '';
    let config = _.merge({}, _.omit(this.get(), 'accessToken'), _config);

    this.getProvider().setAccessToken(accessToken);

    return new Promise((resolve, reject) => {
      this.getProvider().api('me/posts', config, response => response.error ? reject(response.error) : resolve(response.data));
    });
  }
}
