'use strict'

const assert = require('assert').strict

// Uncurrying is the inverse operation of currying
// f(n)(m) --> f'(n, m)
// i.e. we go from x arguments to more than x arguments
const curryedMultiply = (n) => (m) => n * m
assert(curryedMultiply(3)(4) === 12)

const multiply = (n, m) => curryedMultiply(n)(m)
assert(multiply(3, 4) === 12)
