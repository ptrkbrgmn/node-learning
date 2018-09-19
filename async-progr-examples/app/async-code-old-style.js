'use strict'
/**
 * This represents an async io operation of some lib that is put in the message queue.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop
 * https://youtu.be/8aGhZQkoFbQ
 *
 * Modern api:s returns a Promise instead.
 *
 * @param {*} successCallback
 * @param {*} failureCallback
 */

function doSomethingAsyncOldStyle (successCallback, failureCallback) {
  console.log('it is done')
  if (Math.random() > 0.5) successCallback('SUCCESS')
  else failureCallback(new Error('ERROR'))
}

function successCallback (result) {
  console.log(`Succeeded with ${result}`)
}

function failureCallback (err) {
  console.error(`Failed with ${err}`)
}

doSomethingAsyncOldStyle(successCallback, failureCallback)
