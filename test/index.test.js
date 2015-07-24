var assert = require('chai').assert;
var SocialService = require('../');
var FacebookSocial = SocialService.FacebookSocial;

describe('SocialService', function () {
  it('Should properly export', function () {
    assert.isObject(SocialService);
    assert.isFunction(SocialService.create);
    assert.isFunction(SocialService.FacebookSocial);
  });

  it('Should properly create twilio instance', function () {
    assert.instanceOf(SocialService.create('facebook'), FacebookSocial);
  });

  it('Should properly throw exception on create unrecognized', function () {
    assert.throw(function () {
      SocialService.create('NOT_EXISTS');
    }, Error);
  });
});
