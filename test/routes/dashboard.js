const request = require('supertest');
var app = require('../../app');

describe('GET /dashboard', function() {
	it('loads dashboard', function(done) {
		request(app)
		.get('/dashboard')
		.set("Accept", "text/html")
	    .expect('Content-Type', /html/)
	    .expect(200, done);
	});
});
