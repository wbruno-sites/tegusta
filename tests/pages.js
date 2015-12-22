var request = require('supertest'),
    assert  = require('assert'),
    app     = require('../app');

describe('Pages', function() {
  it('Index GET /', function(done) {
    request(app)
      .get('/')
      .expect(200)
      .expect('content-type', 'text/html; charset=utf-8', done);
  });

  it('Index GET /index.html', function(done) {
    request(app)
      .get('/index.html')
      .expect(301)
      .expect('content-type', 'text/plain; charset=utf-8', done);
  });

  it('Index GET /empanada-de-carne.html', function(done) {
    request(app)
      .get('/empanada-de-carne.html')
      .expect(200)
      .expect('content-type', 'text/html; charset=utf-8', done);
  });
});
