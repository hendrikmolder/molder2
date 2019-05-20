import React from 'react'
import { graphql, navigate } from 'gatsby'
import { Item } from 'semantic-ui-react'
import Moment from 'react-moment'

import Layout from '../components/Layout'

export default ({ data }) => (

    <Layout title='Blog'>
        <Item.Group link>
            {data.allPrismicPosts.edges.map((node, key) => (
                <Item onClick={() => navigate(`/blog/${node.node.uid}`)} key={node.node.uid}>
                    <Item.Content>
                        <Item.Header>{node.node.data.title.text}</Item.Header>
                        <Item.Meta>
                            <span className='date'><Moment format='DD MMM YYYY'>{node.node.data.date_published}</Moment></span>
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
                        date_published
                    }
                }
            }
        }
    }
`