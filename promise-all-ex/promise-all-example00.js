'use strict'

function doAsyncLibraryOperation (ms, message) {
  return new Promise((resolve, reject) => {
    setTimeout(
      () => { resolve(message) },
      ms
    )
  })
}

async function operationTimingWrapper (index, asyncOperation) {
  console.time(index)
  const response = await asyncOperation()
  console.timeEnd(index)
  return response
}

// function reducer (promise, wrapper) {
//   return promise.then(wrapper)
// }

// operationTimingWrapper(0, () => doAsyncLibraryOperation(300, '300 ms operation finished')),
// operationTimingWrapper(1, () => doAsyncLibraryOperation(10000, '10 s operation finished')),
// operationTimingWrapper(2, () => doAsyncLibraryOperation(1000, '1 s operation finished')),
// operationTimingWrapper(3, () => doAsyncLibraryOperation(3000, '3 s operation finished'))

// Array.of(Array.of(operationTimingWrapper, doAsyncLibraryOperation, 300, '300 ms operation finished'))
// reduce(promise, ).
