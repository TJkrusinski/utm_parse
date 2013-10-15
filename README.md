# utm_parse

Parse UTM parameters out of a url or querystring and create html inputs.

[![Build Status](https://travis-ci.org/TJkrusinski/parse_utm.png?branch=master)](https://travis-ci.org/TJkrusinski/parse_utm)

## Examples

```
var utm = require('utm_parse');

utm.parse('http://google.com/search?utm_source=lkjsdf');
// => <input type="hidden" name="utm_source" value="lkjsdf">  and so on for each utm parameter

app.get('/landingpage?querystring',
	utm.middleware,
	function(req, res){
		// inputs available at 

		res.render('landingpage', {
			utminputs: res.queryUTM
		});
	});

```

## Tests

Install dev dependencies and run:

`$ npm test`

## License

(The MIT License)

Copyright (c) 2013 TJ Krusinski &lt;tj@shoflo.tv&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
