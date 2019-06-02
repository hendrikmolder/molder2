import React from 'react'
import { graphql, navigate } from 'gatsby'
import { Item } from 'semantic-ui-react'
import Moment from 'react-moment'
import styled from 'styled-components'

import Layout from '../components/Layout'

const StyledItemHeader = styled(Item.Header)`
    font-family: Inter;
`

export default ({ data }) => (

    <Layout title='Blog'>
        <Item.Group link>
            {data.allPrismicPosts.edges.map((node, key) => (
                <Item onClick={() => navigate(`/blog/${node.node.uid}`)} key={node.node.uid}>
                    <Item.Content>
                        <StyledItemHeader>{node.node.data.title.text}</StyledItemHeader>
                        <Item.Meta>
                            <Moment format='Do MMMM YYYY'>{node.node.last_publication_date}</Moment>
                        </Item.Meta>

                    </Item.Content>
                </Item>
            ))}
        </Item.Group>
    </Layout>
)

export const pageQuery = graphql`
    query {
        allPrismicPosts {
            edges {
                node {
                    uid
                    data {
                        title {
                            text
                        }
                    }
                    last_publication_date
                }
            }
        }
    }
`