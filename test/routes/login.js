const request = require('supertest');
var app = require('../../app');

describe('GET /login', function() {
	it('loads login', function(done) {
		request(app)
		.get('/')
		.set("Accept", "text/html")
	    .expect('Content-Type', /html/)
	    .expect(200, done);
	});
});
