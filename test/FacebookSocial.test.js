var assert = require('chai').assert;
var sinon = require('sinon');
var FacebookSocial = require('../lib/FacebookSocial');

describe('FacebookSocial', function () {
  it('Should properly export Facebook', function () {
    assert.isFunction(FacebookSocial);
  });

  it('Should properly get profile', function (done) {
    var fb = new FacebookSocial();

    sinon.stub(fb.getProvider(), 'api', function (url, config, cb) {
      cb({data: 'RESULT'});
    });

    fb
      .getProfile()
      .then(function (result) {
        assert.equal(result, 'RESULT');
        assert.ok(fb.getProvider().api.calledOnce);
        assert.equal(fb.getProvider().api.getCall(0).args[0], 'me');
        assert.deepEqual(fb.getProvider().api.getCall(0).args[1], {fields: ['id', 'name', 'email']});
        assert.isFunction(fb.getProvider().api.getCall(0).args[2]);

        fb.getProvider().api.restore();

        done();
      })
      .catch(done);
  });

  it('Should properly get profile with advanced config', function (done) {
    var fb = new FacebookSocial();

    sinon.stub(fb.getProvider(), 'api', function (url, config, cb) {
      cb({data: 'RESULT'});
    });

    fb
      .getProfile('ACCESS_TOKEN', {fields: ['id', 'name', 'photos']})
      .then(function (result) {
        assert.equal(result, 'RESULT');
        assert.ok(fb.getProvider().api.calledOnce);
        assert.equal(fb.getProvider().api.getCall(0).args[0], 'me');
        assert.deepEqual(fb.getProvider().api.getCall(0).args[1], {fields: ['id', 'name', 'photos']});
        assert.isFunction(fb.getProvider().api.getCall(0).args[2]);

        fb.getProvider().api.restore();

        done();
      })
      .catch(done);
  });

  it('Should properly reject on get profile', function (done) {
    var fb = new FacebookSocial();

    sinon.stub(fb.getProvider(), 'api', function (url, config, cb) {
      cb({error: 'ERROR'});
    });

    fb
      .getProfile('ACCESS_TOKEN')
      .then(done)
      .catch(function (error) {
        assert.equal(error, 'ERROR');
        assert.ok(fb.getProvider().api.calledOnce);
        assert.equal(fb.getProvider().api.getCall(0).args[0], 'me');
        assert.deepEqual(fb.getProvider().api.getCall(0).args[1], {fields: ['id', 'name', 'email']});
        assert.isFunction(fb.getProvider().api.getCall(0).args[2]);

        fb.getProvider().api.restore();

        done();
      });
  });

  it('Should properly get friends', function (done) {
    var fb = new FacebookSocial();

    sinon.stub(fb.getProvider(), 'api', function (url, config, cb) {
      cb({data: 'RESULT'});
    });

    fb
      .getFriends()
      .then(function (result) {
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

  it('Should properly get friends with advanced config', function (done) {
    var fb = new FacebookSocial();

    sinon.stub(fb.getProvider(), 'api', function (url, config, cb) {
      cb({data: 'RESULT'});
    });

    fb
      .getFriends('ACCESS_TOKEN', {fields: ['id', 'name']})
      .then(function (result) {
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

  it('Should properly reject on get friends', function (done) {
    var fb = new FacebookSocial();

    sinon.stub(fb.getProvider(), 'api', function (url, config, cb) {
      cb({error: 'ERROR'});
    });

    fb
      .getFriends('ACCESS_TOKEN')
      .then(done)
      .catch(function (error) {
        assert.equal(error, 'ERROR');
        assert.ok(fb.getProvider().api.calledOnce);
        assert.equal(fb.getProvider().api.getCall(0).args[0], 'me/friends');
        assert.deepEqual(fb.getProvider().api.getCall(0).args[1], {});
        assert.isFunction(fb.getProvider().api.getCall(0).args[2]);

        fb.getProvider().api.restore();

        done();
      });
  });

  it('Should properly get photos', function (done) {
    var fb = new FacebookSocial();

    sinon.stub(fb.getProvider(), 'api', function (url, config, cb) {
      cb({data: 'RESULT'});
    });

    fb
      .getPhotos()
      .then(function (result) {
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

  it('Should properly get photos with advanced config', function (done) {
    var fb = new FacebookSocial();

    sinon.stub(fb.getProvider(), 'api', function (url, config, cb) {
      cb({data: 'RESULT'});
    });

    fb
      .getPhotos('ACCESS_TOKEN', {fields: ['id', 'name']})
      .then(function (result) {
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

  it('Should properly reject on get photos', function (done) {
    var fb = new FacebookSocial();

    sinon.stub(fb.getProvider(), 'api', function (url, config, cb) {
      cb({error: 'ERROR'});
    });

    fb
      .getPhotos('ACCESS_TOKEN')
      .then(done)
      .catch(function (error) {
        assert.equal(error, 'ERROR');
        assert.ok(fb.getProvider().api.calledOnce);
        assert.equal(fb.getProvider().api.getCall(0).args[0], 'me/photos');
        assert.deepEqual(fb.getProvider().api.getCall(0).args[1], {});
        assert.isFunction(fb.getProvider().api.getCall(0).args[2]);

        fb.getProvider().api.restore();

        done();
      });
  });

  it('Should properly get posts', function (done) {
    var fb = new FacebookSocial();

    sinon.stub(fb.getProvider(), 'api', function (url, config, cb) {
      cb({data: 'RESULT'});
    });

    fb
      .getPosts()
      .then(function (result) {
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

  it('Should properly get posts with advanced config', function (done) {
    var fb = new FacebookSocial();

    sinon.stub(fb.getProvider(), 'api', function (url, config, cb) {
      cb({data: 'RESULT'});
    });

    fb
      .getPosts('ACCESS_TOKEN', {fields: ['id', 'name']})
      .then(function (result) {
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

  it('Should properly reject on get posts', function (done) {
    var fb = new FacebookSocial();

    sinon.stub(fb.getProvider(), 'api', function (url, config, cb) {
      cb({error: 'ERROR'});
    });

    fb
      .getPosts('ACCESS_TOKEN')
      .then(done)
      .catch(function (error) {
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
