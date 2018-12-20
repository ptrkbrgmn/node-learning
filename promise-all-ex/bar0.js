'use strict'

// https://stackoverflow.com/questions/44771876/calculate-execution-times-of-async-function-over-multiple-calls

function doWork () {
  return Promise.resolve({ first: 'Tony', last: 'Stank' })
}

async function wrapper ({ index, responses }) {
  console.time(index)
  responses.push(await doWork())
  console.timeEnd(index)
  return { index: ++index, responses }
}

function reducer (promise, wrapper) {
  return promise.then(wrapper)
}

Array(3) // some big number
  .fill(wrapper)
  .reduce(reducer, Promise.resolve({ index: 0, responses: [] }))
  .then(({ responses: results }) => console.info(results))
