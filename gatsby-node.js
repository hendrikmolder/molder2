const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require('path')

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === 'MarkdownRemark') {
        const slug = createFilePath({ node, getNode, basePath: 'pages' })

        createNodeField({
            node,
            name: 'slug',
            value: slug,
        })
    }
}

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions

    const pageTemplate = path.resolve('./src/templates/page.js')
    const postTemplate = path.resolve('./src/templates/post.js')

    return new Promise((resolve, reject) => {
        graphql(pagesQuery).then(result => {
            result.data.allMarkdownRemark.edges.forEach(({ node }) => {

                /* Specify templates for page types */
                switch(node.frontmatter.type) {
                    case 'page':
                        createPage({
                            path: node.frontmatter.slug || node.fields.slug,
                            component: pageTemplate,
                            context: {
                                slug: node.fields.slug,
                            },
                        })
                        break
                    case 'blog':
                        createPage({
                            path: node.fields.slug,
                            component: postTemplate,
                            context: {
                                slug: node.fields.slug,
                            },
                        })
                        break
                }
            })
            resolve()
        }).catch(err => console.error('Failed to render pages', err))
    })
}

const pagesQuery = `{
    allMarkdownRemark {
        edges {
            node {
                frontmatter {
                    type
                }
                fields {
                    slug
                }
            }
        }
    }
}`