'use strict';

var utm = require('../index.js'),
	querystring = require('querystring'),
	assert = require('chai').assert;

var validString = 'foo=bar&utm_campaign=foo&UTM_SOURCE=bar&utm_medium=foomedium',
	validObject = querystring.parse(validString);

var validString2 = '?foo=bar&utm_campaign=foo&UTM_SOURCE=bar&utm_medium=foomedium',
	validObject2 = querystring.parse(validString);

var validString3 = 'http://ww.gogole.com/?foo=bar&utm_campaign=foo&UTM_SOURCE=bar&utm_medium=foomedium';

describe('utm_parse', function(){

	describe('utm#parse()', function(){
		it('parses a string into html inputs', function(){
			var utmstring = validString,
				result = utm.parse(utmstring);

			assert.ok(result);
			assert.isString(result);
		});
	});

	describe('utm#parse()', function(){
		it('parses a string into html inputs', function(){
			var utmstring = validString3,
				result = utm.parse(utmstring);

			assert.ok(result);
			assert.isString(result);
		});
	});

	describe('utm#parse()', function(){
		it('parses an object into html inputs', function(){
			var utmobject = validObject,
				result = utm.parse(utmobject);
				
			assert.ok(result);
			assert.isString(result);
		});
	});

	describe('utm#parse()', function(){
		it('parses a string into html inputs', function(){
			var utmstring = validString2,
				result = utm.parse(utmstring);

			assert.ok(result);
			assert.isString(result);
		});
	});

	describe('utm#parse()', function(){
		it('parses an object into html inputs', function(){
			var utmobject = validObject2,
				result = utm.parse(utmobject);
				
			assert.ok(result);
			assert.isString(result);
		});
	});

	describe('utm#parse()', function(){
		it('parses an object into html inputs', function(){
			var utmobject = validObject,
				result = utm.parse(utmobject, {seperator: '###'});

			assert.ok(result);
			assert.isString(result);
			assert.equal(result.split(/###/gi).length, 3);
		});
	});

	describe('utm#parse()', function(){
		it('parses an object into html inputs', function(){
			var utmobject = validObject2,
				result = utm.parse(utmobject, {seperator: '###'});

			assert.ok(result);
			assert.isString(result);
			assert.equal(result.split(/###/gi).length, 3);
		});
	});

	describe('utm#middleware()', function(){
		var req = {
			query: validObject
		};
		var res = {};
		it('uses middleware to parse the utm with', function(d){
			utm.middleware(req, res, function(){
				assert.isString(req.queryUTM);
				assert.ok(req.queryUTM);
				assert.equal(req.queryUTM.split(/\n/gi).length, 3);
				d();
			});
		});	
	});

});
