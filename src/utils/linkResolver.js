const linkResolver = node => {
  switch (node.frontmatter.layout) {
    case 'blog':
      return `/blog`
    case 'page':
      return ``

    default:
      return ``
  }
}

/* Preserve ES5 syntax until gatsby-plugin-prismic-preview is updated to accept ES6 */
module.exports = linkResolver
