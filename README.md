# ibm866 [![Build status](https://travis-ci.org/mathiasbynens/ibm866.svg?branch=master)](https://travis-ci.org/mathiasbynens/ibm866) [![Dependency status](https://gemnasium.com/mathiasbynens/ibm866.svg)](https://gemnasium.com/mathiasbynens/ibm866)

_ibm866_ is a robust JavaScript implementation of [the ibm866 character encoding as defined by the Encoding Standard](http://encoding.spec.whatwg.org/#ibm866).

This encoding is known under the following names: 866, cp866, csibm866, ibm866, and ibm866.

## Installation

Via [npm](http://npmjs.org/):

```bash
npm install ibm866
```

Via [Bower](http://bower.io/):

```bash
bower install ibm866
```

Via [Component](https://github.com/component/component):

```bash
component install mathiasbynens/ibm866
```

In a browser:

```html
<script src="ibm866.js"></script>
```

In [Narwhal](http://narwhaljs.org/), [Node.js](http://nodejs.org/), and [RingoJS](http://ringojs.org/):

```js
var ibm866 = require('ibm866');
```

In [Rhino](http://www.mozilla.org/rhino/):

```js
load('ibm866.js');
```

Using an AMD loader like [RequireJS](http://requirejs.org/):

```js
require(
  {
    'paths': {
      'ibm866': 'path/to/ibm866'
    }
  },
  ['ibm866'],
  function(ibm866) {
    console.log(ibm866);
  }
);
```

## API

### `ibm866.version`

A string representing the semantic version number.

### `ibm866.labels`

An array of strings, each representing a [label](http://encoding.spec.whatwg.org/#label) for this encoding.

### `ibm866.encode(input, options)`

This function takes a plain text string (the `input` parameter) and encodes it according to ibm866. The return value is a ‘byte string’, i.e. a string of which each item represents an octet as per ibm866.

```js
var encodedData = ibm866.encode(text);
```

The optional `options` object and its `mode` property can be used to set the [error mode](http://encoding.spec.whatwg.org/#error-mode). For encoding, the error mode can be `'fatal'` (the default) or `'html'`.

```js
var encodedData = ibm866.encode(text, {
  'mode': 'html'
});
// If `text` contains a symbol that cannot be represented in ibm866,
// instead of throwing an error, it will return an HTML entity for the symbol.
```

### `ibm866.decode(input, options)`

This function takes a byte string (the `input` parameter) and decodes it according to ibm866.

```js
var text = ibm866.decode(encodedData);
```

The optional `options` object and its `mode` property can be used to set the [error mode](http://encoding.spec.whatwg.org/#error-mode). For decoding, the error mode can be `'replacement'` (the default) or `'fatal'`.

```js
var text = ibm866.decode(encodedData, {
  'mode': 'fatal'
});
// If `encodedData` contains an invalid byte for the ibm866 encoding,
// instead of replacing it with U+FFFD in the output, an error is thrown.
```

## Support

_ibm866_ is designed to work in at least Node.js v0.10.0, Narwhal 0.3.2, RingoJS 0.8-0.9, PhantomJS 1.9.0, Rhino 1.7RC4, as well as old and modern versions of Chrome, Firefox, Safari, Opera, and Internet Explorer.

## Unit tests & code coverage

After cloning this repository, run `npm install` to install the dependencies needed for development and testing. You may want to install Istanbul _globally_ using `npm install istanbul -g`.

Once that’s done, you can run the unit tests in Node using `npm test` or `node tests/tests.js`. To run the tests in Rhino, Ringo, Narwhal, and web browsers as well, use `grunt test`.

To generate the code coverage report, use `grunt cover`.

## Author

| [![twitter/mathias](https://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](https://twitter.com/mathias "Follow @mathias on Twitter") |
|---|
| [Mathias Bynens](http://mathiasbynens.be/) |

## License

_ibm866_ is available under the [MIT](http://mths.be/mit) license.
