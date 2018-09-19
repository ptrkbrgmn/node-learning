'use strict'
const foo = true

// Some fake async method
function doSomething () {
  return new Promise((resolve, reject) => {
    console.log('doSomething is done.')
    if (foo === true) return resolve('DO_SOMETHING_RESULT')
    else reject(new Error('DO_SOMETHING_FAILURE'))
  })
}

// Some fake async method
function doSomethingElse (input) {
  return new Promise((resolve, reject) => {
    console.log(`doSomethingElse is done with input ${input}`)
    if (foo === true) return resolve(`${input} => DO_SOMETHING_ELSE_RESULT`)
    else reject(new Error('DO_SOMETHING_ELSE_FAILURE'))
  })
}

// Some fake async method
function doThirdThing (input) {
  return new Promise((resolve, reject) => {
    console.log(`doThirdThing is done with input ${input}`)
    if (foo === true) return resolve(`${input} => DO_THIRD_THING_RESULT`)
    else reject(new Error('DO_THIRD_THING_FAILURE'))
  })
}

// Use the same failure callback for all functions
function failureCallback (err) {
  console.error(`Failed with ${err}`)
}

// In ECMAScript 2017, this...
// doSomething()
// .then(result => doSomethingElse(result)) // The anonymous function 'result =>...' will equal 'resolve'
// .then(newResult => doThirdThing(newResult))
// .then(finalResult => { console.log(`Got the final result ${finalResult}`) })
// .catch(failureCallback) //  is short for then(null, failureCallback)'
// ...can be replaced by this:
async function asyncFunction () {
  try {
    const result = await doSomething() // I guess there is a default implementation of a resolve method?
    const newResult = await doSomethingElse(result)
    const finalResult = await doThirdThing(newResult)
    console.log(`Got the final result ${finalResult}`)
  } catch (error) {
    failureCallback(error)
  }
}
asyncFunction()
