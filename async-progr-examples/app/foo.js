'use strict'

function asynchronuousFunctionReturningPromise (inData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof inData === 'string' || inData instanceof String) {
        resolve(inData.toUpperCase())
      } else {
        reject(new Error(`Input ${inData} is not a string`))
      }
    }, 2000)
  })
}

// asynchronuousFunctionReturningPromise('in-data')
//   .then((res) => console.log(`asynchronuousFunctionReturningPromise() method returned ${res}`))
//
// console.log('Console is printing this before asyncFunctionReturningPromise() has returned!')

// async functions, a nice way of consuming and creating Promises,
// async function asyncCall () {
//   console.log('calling')
//   var result = await asynchronuousFunctionReturningPromise('in-data')
//   return result
// }
//
// asyncCall()
//   .then(res => console.log(`asyncCall() method returned '${res}'`))
//   .catch(err => console.error(err.message))
//
// console.log('Console is printing this before asyncCall() has returned!')

// Version one
// function blockingAsyncCall () {
//   asynchronuousFunctionReturningPromise('in-data')
//    .then(res => { return res })
//    .catch(err => { throw new Error(err.message) })
// }

async function blockingAsyncCall () {
  const result = await asynchronuousFunctionReturningPromise('in-data')
  console.log(result)
  return result
}

const result = blockingAsyncCall()
console.log(result) // This will print 'undefined'

console.log('Console is printing this before blockingAsyncCall() has returned!')
