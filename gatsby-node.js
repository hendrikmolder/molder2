const path = require('path')
const linkResolver = require('./src/utils/linkResolver')

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const postTemplate = path.resolve('./src/templates/post.js')
    const pageTemplate = path.resolve('./src/templates/page.js')

    const pages = await graphql(`{
        allPrismicPosts {
            edges {
                node {
                    type
                    uid
                }
            }
        }
        allPrismicPage {
            edges {
                node {
                    type
                    uid
                }
            }
        }
    }`)

    pages.data.allPrismicPosts.edges.forEach(edge => createPage({
        path: linkResolver(edge.node),
        component: postTemplate,
        context: {
            uid: edge.node.uid,
        },
    }))

    pages.data.allPrismicPage.edges.forEach(edge => createPage({
        path: linkResolver(edge.node),
        component: pageTemplate,
        context: {
            uid: edge.node.uid,
        },
    }))
}