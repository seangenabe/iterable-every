# iterable-every

Returns whether all elements in the iterable satisfy the predicate. Like Array.prototype.every.

[![npm](https://img.shields.io/npm/v/iterable-every.svg?style=flat-square)](https://www.npmjs.com/package/iterable-every)
[![Build Status](https://img.shields.io/travis/seangenabe/iterable-every/master.svg?style=flat-square)](https://travis-ci.org/seangenabe/iterable-every)
[![Coverage Status](https://img.shields.io/coveralls/seangenabe/iterable-every/master.svg?style=flat-square)](https://coveralls.io/github/seangenabe/iterable-every?branch=master)
[![devDependency Status](https://img.shields.io/david/dev/seangenabe/iterable-every.svg?style=flat-square)](https://david-dm.org/seangenabe/iterable-every#info=devDependencies)
[![node](https://img.shields.io/node/v/iterable-every.svg?style=flat-square)](https://nodejs.org/en/download/)

## Usage

```
const every = require('iterable-every')
```

### every(iterable, callback, thisArg)

* `iterable` - An `Iterable` object (has a `Symbol.iterator` property).
* `callback` - The predicate to test with, called with the following arguments on each iteration:
  * `element` - The current element of the iterable object on the iteration.
  * `index` - The index of the iteration.
  * `iterable` - A reference to `iterable`.
* `thisArg` - Optional. The object that will be used as the context for `callback`.
* Returns: a `Boolean` whether all elements satisfy the predicate.

Passing an empty iterable always returns true.

## License

MIT
