var assert = require('chai').assert;
var FacebookSocial = require('../lib/FacebookSocial');
var SocialService = require('../');

describe('SocialService', function () {
  it('Should properly export', function () {
    assert.isObject(SocialService);
    assert.isFunction(SocialService.create);
    assert.isFunction(SocialService.Facebook);
  });
});
