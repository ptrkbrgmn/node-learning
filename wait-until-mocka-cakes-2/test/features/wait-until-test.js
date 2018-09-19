'use strict'

// const superagent = require("superagent");
const request = require('supertest')
// const deepEqual = require('deep-equal')
const superdebug = require('superdebug')
const jsonFile = require('jsonfile')
const assert = require('assert')
const {executeWithRetry} = require('../execute-with-retry') // This is one retry utility
const {waitUntil} = require('../wait-until.js') // This is another

Feature('Some feature that may need retry', () => {
  Scenario('Some scenario that may need retry', () => {
    Then('something clever', (done) => {
      const expectedResponse = jsonFile.readFileSync('test/features/resources/user1.json')
      request('https://jsonplaceholder.typicode.com')
        .get('/users/1')
        .expect(
          200,
          expectedResponse,
          done
        )
        .use(superdebug())
    })

    Then('something even more clever', async () => {
      await executeWithRetry(() => request('https://jsonplaceholder.typicode.com')
        .get('/users/2')
        .use(superdebug())
        .then((response) => {
          const expectedResponse = jsonFile.readFileSync('test/features/resources/user2.json')
          assert.equal(response.status, 200, 'Failed to recieve status 200')
          assert.deepEqual(response.body, expectedResponse)
        }))
    })

    // THIS IS THE WAY TO DO IT!!
    Then('something even more clever still', async () => {
      await waitUntil(() => request('https://jsonplaceholder.typicode.com')
        .get('/users/3')
        .use(superdebug())
        .then((response) => {
          const expectedResponse = jsonFile.readFileSync('test/features/resources/user3.json')
          assert.equal(response.status, 200, 'Failed to recieve status 200')
          assert.deepEqual(response.body, expectedResponse)
        }))
    })

    // // It's getting better all the time!
    Then('something even more clever still', async () => {
      await waitUntil(async () => {
        const response = await request('https://jsonplaceholder.typicode.com')
          .get('/users/3')
          .use(superdebug())
        // console.log(`got response ${JSON.stringify(response.body, null, 2)}`)
        assert(response.body.id === 3)
      })
    })
  })
})
