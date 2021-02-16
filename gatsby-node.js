const path = require('path')
const linkResolver = require('./src/utils/linkResolver')
const templateResolver = require('./src/utils/templateResolver')
const { createFilePath } = require('gatsby-source-filesystem')

const postTemplate = path.resolve('./src/templates/post.js')
const pageTemplate = path.resolve('./src/templates/page.js')

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'Mdx') {
    createNodeField({
      name: 'slug',
      node,
      value: `${linkResolver(node)}${createFilePath({ node, getNode })}`,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              layout
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  result.data.allMdx.edges.forEach(({ node }, index) => {
    createPage({
      path: node.fields.slug,
      component: templateResolver(node.frontmatter.layout),
      context: { id: node.id },
    })
  })
}

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions

//   const pages = await graphql(`
//     {
//       allPrismicPosts {
//         edges {
//           node {
//             type
//             uid
//           }
//         }
//       }
//       allPrismicPage {
//         edges {
//           node {
//             type
//             uid
//           }
//         }
//       }
//     }
//   `)

//   pages.data.allPrismicPosts.edges.forEach(edge =>
//     createPage({
//       path: linkResolver(edge.node),
//       component: postTemplate,
//       context: {
//         uid: edge.node.uid,
//       },
//     })
//   )

//   pages.data.allPrismicPage.edges.forEach(edge =>
//     createPage({
//       path: linkResolver(edge.node),
//       component: pageTemplate,
//       context: {
//         uid: edge.node.uid,
//       },
//     })
//   )
// }
