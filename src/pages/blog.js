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

    <Layout title='Posts' text>
        <Item.Group link>
            {data.allPrismicPosts.edges.map((node, key) => (
                <React.Fragment>
                    <PostCoverImage 
                        src={node.node.data.preview_image.url} 
                        onClick={() => navigate(`/blog/${node.node.uid}`)}
                        fluid 
                    />
                    <Item onClick={() => navigate(`/blog/${node.node.uid}`)} key={node.node.uid}>
                        <Item.Content>
                            <StyledItemHeader>{node.node.data.title.text}</StyledItemHeader>
                            <Item.Meta>
                                <Moment format='Do MMMM YYYY'>{node.node.last_publication_date}</Moment>
                                &nbsp;| &nbsp;{node.node.data.author.document.data.name.text}
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
        allPrismicPosts {
            edges {
                node {
                    uid
                    data {
                        title { text }
                        preview_image { url }
                        author {
                            document {
                                ... on PrismicPerson {
                                    id
                                    data {
                                        name {
                                            text
                                        }
                                    }
                                }
                            }
                        }
                    }
                    last_publication_date
                }
            }
        }
    }
`