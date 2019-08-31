const path = require('path')

const postTemplate = path.resolve('./src/templates/post.js')
const pageTemplate = path.resolve('./src/templates/page.js')

const templateResolver = docType => {
  switch (docType) {
    case 'blog':
      return postTemplate
    case 'page':
      return pageTemplate

    default:
      return pageTemplate
  }
}

module.exports = templateResolver
