'use strict'

const assert = require('assert').strict

const multiply = (n, m) => n * m
assert(multiply(3, 4) === 12)

const triple = (m) => multiply(3, m)
assert(triple(4) === 12)
