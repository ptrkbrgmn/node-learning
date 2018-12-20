'use strict'

function doAsyncLibraryOperation (ms, message) {
  return new Promise((resolve, reject) => {
    setTimeout(
      () => { resolve(message) },
      ms
    )
  })
}

console.time('Promise.all test')

Promise.all([
  doAsyncLibraryOperation(300, '300 ms operation finished'),
  doAsyncLibraryOperation(10000, '10 sec operation finished'),
  doAsyncLibraryOperation(1000, '1 sec operation finished'),
  doAsyncLibraryOperation(3000, '3 sec operation finished')

])
  .then((values) => { console.log(values) })
  .catch((errors) => { console.log(errors) })
  .finally(() => {
    console.timeEnd('Promise.all test')
    process.exit(0)
  })
