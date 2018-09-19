'use strict'

const supertest = require('supertest')
const superdebug = require('superdebug')
const assert = require('assert')

const NUM_RETRIES = 3

function waitUntilWithPromise (functionToRetry) {
  return new Promise((resolve, reject) => {
    _waitUntil(
      functionToRetry,
      0,
      (err) => {
        if (err) reject(err)
        else resolve()
      }
    )
  })
}

async function _waitUntil (functionToRetryUntilNoError, retriedCount, callback) {
  try {
    await functionToRetryUntilNoError()
  } catch (error) {
    console.error(`Failed with error message ${error.message}. Retry nr ${retriedCount}`)
    if (retriedCount >= NUM_RETRIES) {
      return callback && callback(error)
    }
    return _waitUntil(functionToRetryUntilNoError, retriedCount + 1, callback)
  }
}

waitUntilWithPromise(
  async () => {
    const response = await supertest('https://jsonplaceholder.typicode.com') // await is necessary cause get is async function that returns Request extends Promise<Response>
      .get('/users/3')
      .use(superdebug())
    assert(response.body.id === 30, 'Expected response.body.id to equal 3')
  }
).catch((err) => { console.error(err.message) })
