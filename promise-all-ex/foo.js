'use strict'

// https://stackoverflow.com/questions/44771876/calculate-execution-times-of-async-function-over-multiple-calls

console.time('foo')

function doWork () {
  return Promise.resolve({ first: 'Tony', last: 'Stank' })
}

async function wrapper (index) {
  console.time(index)
  const response = await doWork()
  console.timeEnd(index)
  return response
}

Promise.all(
  Array(3) // some big number
    .fill(wrapper)
    .map((wrapper, index) => wrapper(index))
).then((results) => console.info(results))
  .finally(() => {
    console.timeEnd('foo')
    process.exit(0)
  })
