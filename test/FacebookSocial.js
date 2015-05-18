var assert = require('chai').assert;
var Facebook = require('../lib/FacebookSocial');

describe('FacebookSocial', function () {
  it('Should properly export Facebook', function () {
    assert.isFunction(Facebook);
  });
});
