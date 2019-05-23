const linkResolver = (doc) => {
    switch (doc.type) {
        case 'posts':
            return `/blog/${doc.uid}`
        case 'page':
            return `/${doc.uid}`

        default:
            return `/${doc.uid}`
    }
}

/* Preserve ES5 syntax until gatsby-plugin-prismic-preview is updated to accept ES6 */
module.exports = linkResolver