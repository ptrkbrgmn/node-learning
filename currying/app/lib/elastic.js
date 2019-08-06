'use strict'

/*
function addContentToEsIndex (contentIndex, contentId) {
  return `/${contentIndex}/${contentId}`
}
*/
const addContentToEsIndex = (contentIndex, contentId) => `/${contentIndex}/${contentId}`

module.exports = { addContentToEsIndex }
