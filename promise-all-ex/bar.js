'use strict'

// https://stackoverflow.com/questions/44771876/calculate-execution-times-of-async-function-over-multiple-calls

console.time('bar')

function doWork () {
  return Promise.resolve({ first: 'Tony', last: 'Stank' })
}

async function wrapper ({ index, responses }) {
  console.time(index)
  responses.push(await doWork())
  console.timeEnd(index)
  return { index: ++index, responses }
}

// The reducer function is fed four parameters:
// Accumulator (acc)
// Current Value (cur)
// Current Index (idx)
// Source Array (src)
// Your reducer function's returned value is assigned to the accumulator,
// whose value is remembered across each iteration throughout the array and
// ultimately becomes the final, single resulting value.
// arr.reduce(callback[, initialValue])

Array(3) // some big number
  .fill(wrapper)
  .reduce(
    (promise, wrapper) => promise.then(wrapper), Promise.resolve({ index: 0, responses: [] })
    // reducer callback                          // initialValue
  )
  .then(({ responses: results }) => console.info(results))
  .finally(() => {
    console.timeEnd('bar')
    process.exit(0)
  })
