import { assert } from 'chai';
import SocialService from '../../src/index';
import FacebookSocial from '../../src/FacebookSocial';

describe('SocialService', () => {
  it('Should properly export', () => {
    assert.isFunction(SocialService);
  });

  it('Should properly create twilio instance', () => {
    assert.instanceOf(SocialService('facebook'), FacebookSocial);
  });

  it('Should properly throw exception on create unrecognized', () => {
    assert.throw(() => SocialService('NOT_EXISTS'), Error);
  });
});
