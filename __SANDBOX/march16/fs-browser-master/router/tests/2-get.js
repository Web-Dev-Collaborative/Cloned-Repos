const assert = require('assert');
const route = require('../index')();

const res = {end() {}};
let a = 0;
let b = 0;

route.get('/', (req, res) => {
	assert.equal(req.method, 'GET');
	assert.ok(req.url in {'/':1,'/?query':1});
	a++;
});
route.get('/b', (req, res) => {
	assert.equal(req.method, 'GET');
	assert.ok(req.url in {'/b':1,'/b?query':1});
	b++;
});

route({method:'GET', url:'/'},res);
route({method:'GET', url:'/?query'},res);
route({method:'GET', url:'/query'},res);
route({method:'NOT_GET', url:'/'},res);

route({method:'GET', url:'/b'},res);
route({method:'GET', url:'/b?query'},res);
route({method:'GET', url:'/query'},res);

assert.equal(a, 2);
assert.equal(b, 2);