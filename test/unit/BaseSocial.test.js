import { assert } from 'chai';
import BaseSocial from '../../src/BaseSocial';

describe('BaseSocial', () => {
  it('Should properly export', () => {
    assert.isFunction(BaseSocial);
  });

  it('Should properly make objects configurable', () => {
    let social = new BaseSocial();

    assert.notOk(social.get('foo'));
    assert.instanceOf(social.set('foo', 'bar'), BaseSocial);
    assert.instanceOf(social.set('obj', {foo: 'bar'}), BaseSocial);
    assert.deepEqual(social.get(), {foo: 'bar', obj: {foo: 'bar'}});
    assert.deepEqual(social.get('obj'), {foo: 'bar'});
    assert.equal(social.get('obj.foo'), 'bar');
    assert.equal(social.get('foo'), 'bar');
  });

  it('Should properly create social with pre-defined config', () => {
    let social = new BaseSocial({
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

  it('Should properly get/set provider', () => {
    let social = new BaseSocial();

    assert.deepEqual(social.getProvider(), {});
    assert.instanceOf(social.setProvider('PROVIDER'), BaseSocial);
    assert.equal(social.getProvider(), 'PROVIDER');
  });
});
