import React from 'react'
import { graphql, navigate } from 'gatsby'
import { Item } from 'semantic-ui-react'
import Moment from 'react-moment'

import Page from '../components/Page'

export default ({data}) => (
    <Page title="Blog" showTitle>
        <Item.Group link>
            {data.allMarkdownRemark.edges.map((node, key) => (
                <Item onClick={() => navigate(node.node.fields.slug)} key={node.node.id}>

                    <Item.Content>
                        <Item.Header>{node.node.frontmatter.title}</Item.Header>
                        <Item.Meta>
                            <span className='date'><Moment format='DD MMM YYYY'>{node.node.frontmatter.date}</Moment></span>
                            <span className='author'></span>
                        </Item.Meta>
                        <Item.Description>{node.node.excerpt}</Item.Description>
                    </Item.Content>
                </Item>
            ))}
        </Item.Group>
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
                        date
                        title
                    }
                }
            }
        }
    }
`