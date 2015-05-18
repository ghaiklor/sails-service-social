var Facebook = require('./FacebookSocial');

module.exports = {
  create: function (type, options) {
    switch (type) {
      case 'facebook':
        return new Facebook(options);
      default:
        throw new Error('Unrecognized type -> ' + type);
    }
  },

  Facebook: Facebook
};
