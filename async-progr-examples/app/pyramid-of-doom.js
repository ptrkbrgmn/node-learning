'use strict'
const foo = true

// Some fake async method
function doSomething (successCallback, failureCallback) {
  console.log('doSomething is done')
  if (foo === true) return successCallback('DO_SOMETHING_RESULT')
  else failureCallback(new Error('DO_SOMETHING_ERROR'))
}

// Some fake async method
function doSomethingElse (input, successCallback, failureCallback) {
  console.log(`doSomethingElse is done with input ${input}`)
  if (foo === true) return successCallback(`${input} => DO_SOMETHING_ELSE_RESULT`)
  else failureCallback(new Error('DO_SOMETHING_ELSE_ERROR'))
}

// Some fake async method
function doThirdThing (input, successCallback, failureCallback) {
  console.log(`doThirdThing is done with input ${input}`)
  if (foo === true) return successCallback(`${input} => DO_THIRD_THING_RESULT`)
  else failureCallback(new Error('DO_THIRD_THING_ERROR'))
}

// Use the same failure callback for all functions
function failureCallback (err) {
  console.error(`Failed with ${err}`)
}

// Use another async function instead.
// function successCallback (result) {
//   console.log(`Succeeded with ${result}`)
// }

// callback pyramid of doom
doSomething(
  function (doSomethingResult) {
    doSomethingElse(
      doSomethingResult,
      function (doSomethingElseResult) {
        doThirdThing(
          doSomethingElseResult,
          function (finalResult) {
            console.log('Got the final result: ' + finalResult)
          },
          failureCallback
        )
      },
      failureCallback)
  },
  failureCallback)
