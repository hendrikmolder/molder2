import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export default ({ data: { prismicPosts } }) => {
    const { data, last_publication_date } = prismicPosts
    const metaData = {
        name: data.author.document.data.name.text,
        avatar: data.author.document.data.picture.url,
        published_at: last_publication_date
    }


    return (
        <React.Fragment>
            <Layout
                title={data.title.text}
                subTitle={data.subtitle.text}
                meta={metaData}
                text
            >
                <div dangerouslySetInnerHTML={{ __html: data.body.html }} />
            </Layout>
        </React.Fragment>
    )
}

export const pageQuery = graphql`
    query PostBySlug($uid: String!) {
        prismicPosts(uid: { eq: $uid }) {
            uid
            last_publication_date
            data {
                title { text }
                subtitle { text }
                body { html }
                author {
                    document {
                        ...on PrismicPerson {
                            data {
                                name {
                                    text
                                }
                                picture {
                                    url
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`