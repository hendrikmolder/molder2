import React from 'react'
import { graphql, navigate } from 'gatsby'
import { Item, Image } from 'semantic-ui-react'
import Moment from 'react-moment'
import styled from 'styled-components'

import Layout from '../components/Layout'

const StyledItemHeader = styled(Item.Header)`
  font-family: Inter;
`

const PostCoverImage = styled(Image)`
  :hover {
    cursor: pointer;
  }
`

export default ({ data }) => (
  <Layout title="Posts" text>
    <Item.Group link>
      {data.allMdx.edges.map((node, key) => (
        <React.Fragment key>
          <PostCoverImage
            src={node.node.frontmatter.thumbnail}
            onClick={() => navigate(node.node.fields.slug)}
            fluid
          />
          <Item
            onClick={() => navigate(node.node.fields.slug)}
            key={node.node.uid}
          >
            <Item.Content>
              <StyledItemHeader>{node.node.frontmatter.title}</StyledItemHeader>
              <Item.Meta>
                <Moment format="Do MMMM YYYY">
                  {node.node.frontmatter.date}
                </Moment>
                &nbsp;| &nbsp;{node.node.frontmatter.author}
              </Item.Meta>
            </Item.Content>
          </Item>
        </React.Fragment>
      ))}
    </Item.Group>
  </Layout>
)

export const pageQuery = graphql`
  query {
    allMdx(filter: { frontmatter: { layout: { eq: "blog" } } }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            author
            date
            thumbnail
          }
        }
      }
    }
  }
`
