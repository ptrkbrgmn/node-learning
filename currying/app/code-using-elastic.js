'use strict'

const addContentToEsIndex = require('./lib/elastic').addContentToEsIndex

console.log(addContentToEsIndex('content-dmedia', 123))

const addContent = (m) => addContentToEsIndex('content-dmedia', m)
console.log(addContent(456))
