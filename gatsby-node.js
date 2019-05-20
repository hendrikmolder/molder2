// const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require('path')
const linkResolver = require('./src/utils/linkResolver')

// exports.onCreateNode = ({ node, getNode, actions }) => {
//     const { createNodeField } = actions
//     if (node.internal.type === 'MarkdownRemark') {
//         const slug = createFilePath({ node, getNode, basePath: 'pages' })

//         createNodeField({
//             node,
//             name: 'slug',
//             value: slug,
//         })
//     }
// }

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const postTemplate = path.resolve('./src/templates/post.js')

    const pages = await graphql(`{
        allPrismicPosts {
            edges {
                node {
                    type
                    uid
                }
            }
        }
    }`)

    pages.data.allPrismicPosts.edges.forEach(edge => {
        createPage({
            path: linkResolver(edge.node),
            component: postTemplate,
            context: {
                uid: edge.node.uid,
            },
        })
    })
}