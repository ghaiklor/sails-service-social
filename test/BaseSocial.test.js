var assert = require('chai').assert;
var BaseSocial = require('../lib/BaseSocial');

describe('BaseSocial', function () {
  it('Should properly export', function () {
    assert.isFunction(BaseSocial);
    assert.isFunction(BaseSocial.prototype.get);
    assert.isFunction(BaseSocial.prototype.set);
    assert.isFunction(BaseSocial.prototype.getProvider);
    assert.isFunction(BaseSocial.prototype.setProvider);
    assert.isFunction(BaseSocial.prototype.friends);
    assert.isFunction(BaseSocial.prototype.photos);
  });

  it('Should properly make objects configurable', function () {
    var social = new BaseSocial();

    assert.notOk(social.get('foo'));
    assert.instanceOf(social.set('foo', 'bar'), BaseSocial);
    assert.instanceOf(social.set('obj', {foo: 'bar'}), BaseSocial);
    assert.deepEqual(social.get(), {foo: 'bar', obj: {foo: 'bar'}});
    assert.deepEqual(social.get('obj'), {foo: 'bar'});
    assert.equal(social.get('obj.foo'), 'bar');
    assert.equal(social.get('foo'), 'bar');
  });

  it('Should properly create social with pre-defined config', function () {
    var social = new BaseSocial({
      foo: 'bar',
      obj: {
        foo: 'bar'
      }
    });

    assert.equal(social.get('foo'), 'bar');
    assert.equal(social.get('obj.foo'), 'bar');
    assert.deepEqual(social.get('obj'), {foo: 'bar'});
    assert.notOk(social.get('NOT_EXISTS'));
  });

  it('Should properly get/set provider', function () {
    var social = new BaseSocial();

    assert.notOk(social.getProvider());
    assert.instanceOf(social.setProvider('PROVIDER'), BaseSocial);
    assert.equal(social.getProvider(), 'PROVIDER');
  });
});
