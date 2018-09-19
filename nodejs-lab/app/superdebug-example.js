let superagent = require('superagent');
let superdebug = require('superdebug');

superagent('GET', 'https://www.google.com')
    .set({Accept: 'application/json'})
    .query({superdebug: 'is-awesome'})
    .use(superdebug(console.info))
    .timeout(10000)
    .send()
    .end()