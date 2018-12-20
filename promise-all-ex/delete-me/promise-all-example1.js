'use strict'

function doAsyncLibraryOperation (ms, message) {
  return new Promise((resolve, reject) => {
    setTimeout(
      () => { resolve(message) },
      ms
    )
  })
}

async function operationTimingWrapper (index, ms, message) {
  console.time(index)
  const response = await doAsyncLibraryOperation(ms, message)
  console.timeEnd(index)
  return response
}

console.time('Promise.all test')

Promise.all([
  operationTimingWrapper(0, 300, '300 ms operation finished'),
  operationTimingWrapper(1, 10000, '10 sec operation finished'),
  operationTimingWrapper(2, 1000, '1 sec operation finished'),
  operationTimingWrapper(3, 3000, '3 sec operation finished')

])
  .then((values) => { console.log(values) })
  .catch((errors) => { console.log(errors) })
  .finally(() => {
    console.timeEnd('Promise.all test')
    process.exit(0)
  })
