'use strict';
var assert = require('assert');
var readChunk = require('read-chunk');
var isWoff = require('./');

function check(filename) {
	return isWoff(readChunk.sync(filename, 0, 8));
}

it('should detect WOFF from Buffer', function () {
	assert(check('fixture/fontawesome-webfont.woff'));
});

it('should detect WOFF(OTTO) from Buffer', function () {
	assert(check('fixture/young-heart.woff'));
});

it('should not detect WOFF from WOFF2 Buffer', function () {
	assert(!check('fixture/fontawesome-webfont.woff2'));
});

