'use strict'

const tap = require('tap')
const every = require('..')
const test = tap.test
const assert = require('power-assert')

function *zeroTwoFour() {
  yield 0
  yield 2
  yield 4
}

function isEven(n) {
  return n % 2 == 0
}

test('empty iterable', t => {
  assert.strictEqual(every([], isEven), true)
  t.end()
})

test('should return true', t => {
  assert.strictEqual(every(zeroTwoFour(), isEven), true)
  t.end()
})

test('null iterable', t => {
  assert.throws(() => every(), TypeError)
  assert.throws(() => every(null, [0, 2, 4]), TypeError)
  assert.throws(() => every(undefined, [0, 2, 4]), TypeError)
  t.end()
})

test('not an iterable', t => {
  assert.throws(() => every(NaN, isEven), TypeError)
  t.end()
})

test('null callback', t => {
  let iterable = zeroTwoFour()
  t.throws(() => every(iterable))
  t.throws(() => every(iterable, null))
  t.throws(() => every(iterable, undefined))
  t.end()
})

test('callback not a function', t => {
  t.throws(() => every(zeroTwoFour(), NaN))
  t.end()
})

test('should return false', t => {
  assert.strictEqual(every((function*() {
    yield 0
    yield 2
    yield 3
  })(), isEven), false)
  t.end()
})

test('callback arguments and thisArg', t => {
  let obj = {}
  let iterable = zeroTwoFour()
  assert.strictEqual(every(
    iterable,
    function(element, index, _iterable) {
      if (iterable !== _iterable) { return false }
      if (this !== obj) { return false }
      return element / 2 == index
    },
    obj
  ), true)
  t.end()
})
