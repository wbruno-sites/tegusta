var request = require('supertest'),
    assert  = require('assert'),
    app     = require('../app');

describe('Routes', function() {
  it('Not Found', function(done) {
    request(app)
      .get('/notfound')
      .expect(404)
      .expect('content-type', 'text/html; charset=utf-8', done);
  });

  it('Geo', function(done) {
    this.timeout(20 * 1000);

    request(app)
      .get('/geo/-23.602504999999997,-46.7883278')
      .expect(200)
      .expect('content-type', 'application/json')
      .end(function(err, res) {
        assert.deepEqual(res.body, { address: 'Rua Padre Jácome de Queirós', cep: '05570-060' });
        done();
      });
  });

  it('Telephone', function(done) {
    request(app)
      .get('/telephone')
      .expect(200)
      .expect('content-type', 'application/json')
      .end(function(err, res) {
        var body = res.body;
        assert.ok(body.now);
        assert.ok(body.telephone);
        assert.ok(body.until);
        done();
      });
  });

  it('Moved Permanently', function(done) {
    request(app)
      .get('/empanada')
      .expect(301)
      .end(function(err, res) {
        assert.equal(res.header.location, '/');
        done();
      })
  });
}); //describe


