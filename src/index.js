var social = {
  facebook: require('./FacebookSocial')
};

module.exports = {
  /**
   * Create instance of social service
   * @param {String} type
   * @param {Object} config
   * @returns {*}
   */
  create: function (type, config) {
    if (social[type.toLowerCase()] instanceof Function) {
      return new social[type.toLowerCase()](config);
    } else {
      throw new Error('Unrecognized type -> ' + type);
    }
  },

  FacebookSocial: social.facebook
};
