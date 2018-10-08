import React from 'react'
import Link from 'gatsby-link'

import Page from '../components/Page'

export default ({data}) => (
    <Page title="Blog" showTitle>
        {data.allMarkdownRemark.edges.map((node, key) => (
            <div key={node.node.id}>
                <Link to={node.node.fields.slug} style={{ textTransform: 'uppercase' }}>{node.node.frontmatter.title}</Link>
                &nbsp;{node.node.frontmatter.date} <br />
                <small>{node.node.excerpt}</small>
                <br /><br />
            </div>
        ))}
    </Page>
)

export const query = graphql`
    query {
        allMarkdownRemark(
            filter: { frontmatter: { type: { eq: "blog" } } }
            sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    id
                    fields {
                        slug
                    }
                    excerpt(pruneLength: 250)
                    frontmatter {
                        date(formatString: "D MMMM YYYY")
                        title
                    }
                }
            }
        }
    }
`