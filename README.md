# ibm866 [![Build status](https://github.com/mathiasbynens/ibm866/workflows/run-checks/badge.svg)](https://github.com/mathiasbynens/ibm866/actions?query=workflow%3Arun-checks) [![ibm866 on npm](https://img.shields.io/npm/v/ibm866)](https://www.npmjs.com/package/ibm866)

_ibm866_ is a robust JavaScript implementation of [the ibm866 character encoding as defined by the Encoding Standard](https://encoding.spec.whatwg.org/#ibm866).

This encoding is known under the following names: 866, cp866, csibm866, and ibm866.

## Installation

Via [npm](https://www.npmjs.com/):

```bash
npm install ibm866
```

In a browser:

```html
<script src="ibm866.js"></script>
```

In [Node.js](https://nodejs.org/):

```js
const ibm866 = require('ibm866');
```

## API

### `ibm866.version`

A string representing the semantic version number.

### `ibm866.labels`

An array of strings, each representing a [label](https://encoding.spec.whatwg.org/#label) for this encoding.

### `ibm866.encode(input, options)`

This function takes a plain text string (the `input` parameter) and encodes it according to ibm866. The return value is a ‘byte string’, i.e. a string of which each item represents an octet as per ibm866.

```js
const encodedData = ibm866.encode(text);
```

The optional `options` object and its `mode` property can be used to set the [error mode](https://encoding.spec.whatwg.org/#error-mode). For encoding, the error mode can be `'fatal'` (the default) or `'html'`.

```js
const encodedData = ibm866.encode(text, {
  mode: 'html'
});
// If `text` contains a symbol that cannot be represented in ibm866,
// instead of throwing an error, it will return an HTML entity for the symbol.
```

### `ibm866.decode(input, options)`

This function takes a byte string (the `input` parameter) and decodes it according to ibm866.

```js
const text = ibm866.decode(encodedData);
```

The optional `options` object and its `mode` property can be used to set the [error mode](https://encoding.spec.whatwg.org/#error-mode). For decoding, the error mode can be `'replacement'` (the default) or `'fatal'`.

```js
const text = ibm866.decode(encodedData, {
  mode: 'fatal'
});
// If `encodedData` contains an invalid byte for the ibm866 encoding,
// instead of replacing it with U+FFFD in the output, an error is thrown.
```

For decoding a buffer (e.g. from `fs.readFile`) use `buffer.toString('binary')` to get the byte string which `decode` takes.

## Notes

[Similar modules for other single-byte legacy encodings are available.](https://www.npmjs.com/browse/keyword/legacy-encoding)

## Author

| [![twitter/mathias](https://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](https://twitter.com/mathias "Follow @mathias on Twitter") |
|---|
| [Mathias Bynens](https://mathiasbynens.be/) |

## License

_ibm866_ is available under the [MIT](https://mths.be/mit) license.
