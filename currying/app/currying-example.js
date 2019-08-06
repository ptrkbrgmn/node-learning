'use strict'

const assert = require('assert').strict

const multiply = (n, m) => (n * m)
assert(multiply(3, 4) === 12)

// f(n,m) --> f'(n)(m)
// i.e we go from x arguments to less than x arguments
const curryedMultiply = (n) => (m) => multiply(n, m)
assert(curryedMultiply(3)(4) === 12)
// or
const triple = curryedMultiply(3)
assert(triple(4) === 12)
