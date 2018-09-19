/**
 * This is a modified version of
 * https://blog.risingstack.com/mastering-async-await-in-nodejs/
 */

function wait (timeout) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, timeout)
  })
}

// Make recurssive instead of loop? ESLint warns for 'await in loop'
async function executeWithRetry (asyncFunctionReturningPromise) {
  const MAX_RETRIES = 10
  for (let i = 0; i <= MAX_RETRIES; i++) {
    try {
      return await asyncFunctionReturningPromise()
    } catch (err) {
      const timeout = Math.pow(2, i)
      console.log('Waiting', timeout, 'ms')
      await wait(timeout)
      console.error('Error: %s, (retry attempt %s)', err.message, i)
    }
  }
}

module.exports = {executeWithRetry}
