'use strict'

module.exports = function iterableEvery(iterable, callback, thisArg) {
  if (iterable == null) {
    throw new TypeError("iterable is not defined")
  }
  if (typeof callback !== 'function') {
    throw new TypeError("callback is not defined")
  }
  let index = 0
  for (let element of iterable) {
    let result = callback.call(thisArg, element, index, iterable)
    if (!result) { return false }
    index++
  }
  return true
}
