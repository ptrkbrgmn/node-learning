'use strict'

const supertest = require('supertest')
const superagent = require('superagent')
const superdebug = require('superdebug')
const assert = require('assert')

const NUM_RETRIES = 3

function request (url, callback) {
  requestWithRetry(url, callback, 0)
}

// function requestWithRetry (url, callback, retriedCount) {
//   superagent
//     .get(url)
//     .use(superdebug)
//     .end(
//       function (error, res) {
//         console.log(`Request nr ${retriedCount} for ${url}`)
//         if (error) {
//           if (retriedCount >= NUM_RETRIES) {
//             return callback && callback(error)
//           }
//           return requestWithRetry(url, callback, retriedCount + 1)
//         } else {
//           return callback(null, res)
//         }
//       }
//     )
// }

async function requestWithRetry (url, callback, retriedCount) {
  try {
    const response = await supertest(url)
      .get('')
      .use(superdebug())
    console.log(`## Received response ${response}`)
    assert.equal(response.status, 200)
    return response
  } catch (error) {
    console.log(`### Request nr ${retriedCount} for ${url}`)
    if (retriedCount >= NUM_RETRIES) {
      return callback && callback(error)
    }
    return requestWithRetry(url, callback, retriedCount + 1)
  }
}

request('http://www.google.com/foo', (err, res) => {
  if (err) console.error(err.message)
  if (res) console.log(res.status)
})

// // console.log(`got response ${JSON.stringify(response.body, null, 2)}`)

// async function asyncFunction () {
//   try {
//     const response = await request('https://jsonplaceholder.typicode.com')
//       .get('/users/3')
//       .use(superdebug())
//     assert(response.body.id === 30, 'Expected response.body.id to equal 30')
//   } catch (error) {
//     console.error(`Assertion failed: ${error.message}`)
//   }
// }

// asyncFunction()
