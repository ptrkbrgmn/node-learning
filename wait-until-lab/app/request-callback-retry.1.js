'use strict'

const supertest = require('supertest')
const superagent = require('superagent')
const superdebug = require('superdebug')
const assert = require('assert')

const NUM_RETRIES = 3

function waitUntilWithCallback (functionToRetry, callback) {
  _waitUntil(functionToRetry, 0, callback)
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

waitUntilWithCallback(
  async () => {
    const response = await supertest('https://jsonplaceholder.typicode.com') // await is necessary cause get is async function that returns Request extends Promise<Response>
      .get('/users/3')
      .use(superdebug())
    assert(response.body.id === 3, 'Expected response.body.id to equal 3')
  },
  (err, res) => {
    if (err) console.error(err.message)
  }
)
