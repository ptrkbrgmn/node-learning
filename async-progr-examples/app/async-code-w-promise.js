
'use strict'

/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
 */
function doSomethingPromiseStyle () {
  return new Promise((resolve, reject) => {
    console.log('It is done.')
    if (Math.random() > 0.5) {
      resolve('SUCCESS')
    } else {
      reject(new Error('FAILURE'))
    }
  })
}

function successCallback (result) {
  console.log(`Succeeded with ${result}`)
  return result
}

function failureCallback (err) {
  console.error(`Failed with ${err}`)
}

/**
 * My understanding here is that when calling .then(successCallback, failureCallback)
 * the Promise instance will execute the anonymous function supplied when instantiating the promise.
 *
 * 'successCallback' and 'failureCallback' will be actual parameters for formal parameters
 * 'resolve' and 'reject' in the anonymous function.
 */
const promise = doSomethingPromiseStyle()
const promise2 = promise.then(successCallback, failureCallback)
promise2.then(console.log)
