import FacebookSocial from './FacebookSocial';

var social = {
  facebook: FacebookSocial
};

/**
 * Create instance of social service
 * @param {String} type
 * @param {Object} [config]
 * @returns {*}
 */
export default function (type, config) {
  if (social[type.toLowerCase()] instanceof Function) {
    return new social[type.toLowerCase()](config);
  } else {
    throw new Error('Unrecognized type -> ' + type);
  }
}
