import { assert } from 'chai';
import sinon from 'sinon';
import FacebookSocial from '../../src/FacebookSocial';

describe('FacebookSocial', () => {
  it('Should properly export Facebook', () => {
    assert.isFunction(FacebookSocial);
  });

  it('Should properly get profile', done => {
    let fb = new FacebookSocial();

    sinon.stub(fb.getProvider(), 'api', (url, config, cb) => cb({data: 'RESULT'}));

    fb
      .getProfile()
      .then(result => {
        assert.deepEqual(result, {data: 'RESULT'});
        assert.ok(fb.getProvider().api.calledOnce);
        assert.equal(fb.getProvider().api.getCall(0).args[0], 'me');
        assert.deepEqual(fb.getProvider().api.getCall(0).args[1], {fields: ['id', 'name', 'email']});
        assert.isFunction(fb.getProvider().api.getCall(0).args[2]);

        fb.getProvider().api.restore();

        done();
      })
      .catch(done);
  });

  it('Should properly get profile with advanced config', done => {
    let fb = new FacebookSocial();

    sinon.stub(fb.getProvider(), 'api', (url, config, cb) => cb({data: 'RESULT'}));

    fb
      .getProfile('ACCESS_TOKEN', {fields: ['id', 'name', 'photos']})
      .then(result => {
        assert.deepEqual(result, {data: 'RESULT'});
        assert.ok(fb.getProvider().api.calledOnce);
        assert.equal(fb.getProvider().api.getCall(0).args[0], 'me');
        assert.deepEqual(fb.getProvider().api.getCall(0).args[1], {fields: ['id', 'name', 'photos']});
        assert.isFunction(fb.getProvider().api.getCall(0).args[2]);

        fb.getProvider().api.restore();

        done();
      })
      .catch(done);
  });

  it('Should properly reject on get profile', done => {
    let fb = new FacebookSocial();

    sinon.stub(fb.getProvider(), 'api', (url, config, cb) => cb({error: 'ERROR'}));

    fb
      .getProfile('ACCESS_TOKEN')
      .then(done)
      .catch(error => {
        assert.equal(error, 'ERROR');
        assert.ok(fb.getProvider().api.calledOnce);
        assert.equal(fb.getProvider().api.getCall(0).args[0], 'me');
        assert.deepEqual(fb.getProvider().api.getCall(0).args[1], {fields: ['id', 'name', 'email']});
        assert.isFunction(fb.getProvider().api.getCall(0).args[2]);

        fb.getProvider().api.restore();

        done();
      });
  });

  it('Should properly get friends', done => {
    let fb = new FacebookSocial();

    sinon.stub(fb.getProvider(), 'api', (url, config, cb) => cb({data: 'RESULT'}));

    fb
      .getFriends()
      .then(result => {
        assert.equal(result, 'RESULT');
        assert.ok(fb.getProvider().api.calledOnce);
        assert.equal(fb.getProvider().api.getCall(0).args[0], 'me/friends');
        assert.deepEqual(fb.getProvider().api.getCall(0).args[1], {});
        assert.isFunction(fb.getProvider().api.getCall(0).args[2]);

        fb.getProvider().api.restore();

        done();
      })
      .catch(done);
  });

  it('Should properly get friends with advanced config', done => {
    let fb = new FacebookSocial();

    sinon.stub(fb.getProvider(), 'api', (url, config, cb) => cb({data: 'RESULT'}));

    fb
      .getFriends('ACCESS_TOKEN', {fields: ['id', 'name']})
      .then(result => {
        assert.equal(result, 'RESULT');
        assert.ok(fb.getProvider().api.calledOnce);
        assert.equal(fb.getProvider().api.getCall(0).args[0], 'me/friends');
        assert.deepEqual(fb.getProvider().api.getCall(0).args[1], {fields: ['id', 'name']});
        assert.isFunction(fb.getProvider().api.getCall(0).args[2]);

        fb.getProvider().api.restore();

        done();
      })
      .catch(done);
  });

  it('Should properly reject on get friends', done => {
    let fb = new FacebookSocial();

    sinon.stub(fb.getProvider(), 'api', (url, config, cb) => cb({error: 'ERROR'}));

    fb
      .getFriends('ACCESS_TOKEN')
      .then(done)
      .catch(error => {
        assert.equal(error, 'ERROR');
        assert.ok(fb.getProvider().api.calledOnce);
        assert.equal(fb.getProvider().api.getCall(0).args[0], 'me/friends');
        assert.deepEqual(fb.getProvider().api.getCall(0).args[1], {});
        assert.isFunction(fb.getProvider().api.getCall(0).args[2]);

        fb.getProvider().api.restore();

        done();
      });
  });

  it('Should properly get photos', done => {
    let fb = new FacebookSocial();

    sinon.stub(fb.getProvider(), 'api', (url, config, cb) => cb({data: 'RESULT'}));

    fb
      .getPhotos()
      .then(result => {
        assert.equal(result, 'RESULT');
        assert.ok(fb.getProvider().api.calledOnce);
        assert.equal(fb.getProvider().api.getCall(0).args[0], 'me/photos');
        assert.deepEqual(fb.getProvider().api.getCall(0).args[1], {});
        assert.isFunction(fb.getProvider().api.getCall(0).args[2]);

        fb.getProvider().api.restore();

        done();
      })
      .catch(done);
  });

  it('Should properly get photos with advanced config', done => {
    let fb = new FacebookSocial();

    sinon.stub(fb.getProvider(), 'api', (url, config, cb) => cb({data: 'RESULT'}));

    fb
      .getPhotos('ACCESS_TOKEN', {fields: ['id', 'name']})
      .then(result => {
        assert.equal(result, 'RESULT');
        assert.ok(fb.getProvider().api.calledOnce);
        assert.equal(fb.getProvider().api.getCall(0).args[0], 'me/photos');
        assert.deepEqual(fb.getProvider().api.getCall(0).args[1], {fields: ['id', 'name']});
        assert.isFunction(fb.getProvider().api.getCall(0).args[2]);

        fb.getProvider().api.restore();

        done();
      })
      .catch(done);
  });

  it('Should properly reject on get photos', done => {
    let fb = new FacebookSocial();

    sinon.stub(fb.getProvider(), 'api', (url, config, cb) => cb({error: 'ERROR'}));

    fb
      .getPhotos('ACCESS_TOKEN')
      .then(done)
      .catch(error => {
        assert.equal(error, 'ERROR');
        assert.ok(fb.getProvider().api.calledOnce);
        assert.equal(fb.getProvider().api.getCall(0).args[0], 'me/photos');
        assert.deepEqual(fb.getProvider().api.getCall(0).args[1], {});
        assert.isFunction(fb.getProvider().api.getCall(0).args[2]);

        fb.getProvider().api.restore();

        done();
      });
  });

  it('Should properly get posts', done => {
    let fb = new FacebookSocial();

    sinon.stub(fb.getProvider(), 'api', (url, config, cb) => cb({data: 'RESULT'}));

    fb
      .getPosts()
      .then(result => {
        assert.equal(result, 'RESULT');
        assert.ok(fb.getProvider().api.calledOnce);
        assert.equal(fb.getProvider().api.getCall(0).args[0], 'me/posts');
        assert.deepEqual(fb.getProvider().api.getCall(0).args[1], {});
        assert.isFunction(fb.getProvider().api.getCall(0).args[2]);

        fb.getProvider().api.restore();

        done();
      })
      .catch(done);
  });

  it('Should properly get posts with advanced config', done => {
    let fb = new FacebookSocial();

    sinon.stub(fb.getProvider(), 'api', (url, config, cb) => cb({data: 'RESULT'}));

    fb
      .getPosts('ACCESS_TOKEN', {fields: ['id', 'name']})
      .then(result => {
        assert.equal(result, 'RESULT');
        assert.ok(fb.getProvider().api.calledOnce);
        assert.equal(fb.getProvider().api.getCall(0).args[0], 'me/posts');
        assert.deepEqual(fb.getProvider().api.getCall(0).args[1], {fields: ['id', 'name']});
        assert.isFunction(fb.getProvider().api.getCall(0).args[2]);

        fb.getProvider().api.restore();

        done();
      })
      .catch(done);
  });

  it('Should properly reject on get posts', done => {
    let fb = new FacebookSocial();

    sinon.stub(fb.getProvider(), 'api', (url, config, cb) => cb({error: 'ERROR'}));

    fb
      .getPosts('ACCESS_TOKEN')
      .then(done)
      .catch(error => {
        assert.equal(error, 'ERROR');
        assert.ok(fb.getProvider().api.calledOnce);
        assert.equal(fb.getProvider().api.getCall(0).args[0], 'me/posts');
        assert.deepEqual(fb.getProvider().api.getCall(0).args[1], {});
        assert.isFunction(fb.getProvider().api.getCall(0).args[2]);

        fb.getProvider().api.restore();

        done();
      });
  });
});
