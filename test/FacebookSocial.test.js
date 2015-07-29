var assert = require('chai').assert;
var sinon = require('sinon');
var FacebookSocial = require('../lib/FacebookSocial');

describe('FacebookSocial', function () {
  it('Should properly export Facebook', function () {
    assert.isFunction(FacebookSocial);
  });

  it('Should properly get friends', function (done) {
    var fb = new FacebookSocial();

    sinon.stub(fb.getProvider(), 'api', function (url, cb) {
      cb({data: 'RESULT'});
    });

    fb
      .getFriends()
      .then(function (result) {
        assert.equal(result, 'RESULT');
        assert.ok(fb.getProvider().api.calledOnce);
        assert.equal(fb.getProvider().api.getCall(0).args[0], 'me/friends');
        assert.isFunction(fb.getProvider().api.getCall(0).args[1]);

        fb.getProvider().api.restore();

        done();
      })
      .catch(done);
  });

  it('Should properly reject on get friends', function (done) {
    var fb = new FacebookSocial();

    sinon.stub(fb.getProvider(), 'api', function (url, cb) {
      cb({error: 'ERROR'});
    });

    fb
      .getFriends()
      .then(done)
      .catch(function (error) {
        assert.equal(error, 'ERROR');
        assert.ok(fb.getProvider().api.calledOnce);
        assert.equal(fb.getProvider().api.getCall(0).args[0], 'me/friends');
        assert.isFunction(fb.getProvider().api.getCall(0).args[1]);

        fb.getProvider().api.restore();

        done();
      });
  });

  it('Should properly get photos', function (done) {
    var fb = new FacebookSocial();

    sinon.stub(fb.getProvider(), 'api', function (url, cb) {
      cb({data: 'RESULT'});
    });

    fb
      .getPhotos()
      .then(function (result) {
        assert.equal(result, 'RESULT');
        assert.ok(fb.getProvider().api.calledOnce);
        assert.equal(fb.getProvider().api.getCall(0).args[0], 'me/photos');
        assert.isFunction(fb.getProvider().api.getCall(0).args[1]);

        fb.getProvider().api.restore();

        done();
      })
      .catch(done);
  });

  it('Should properly reject on get photos', function (done) {
    var fb = new FacebookSocial();

    sinon.stub(fb.getProvider(), 'api', function (url, cb) {
      cb({error: 'ERROR'});
    });

    fb
      .getPhotos()
      .then(done)
      .catch(function (error) {
        assert.equal(error, 'ERROR');
        assert.ok(fb.getProvider().api.calledOnce);
        assert.equal(fb.getProvider().api.getCall(0).args[0], 'me/photos');
        assert.isFunction(fb.getProvider().api.getCall(0).args[1]);

        fb.getProvider().api.restore();

        done();
      });
  });
});
