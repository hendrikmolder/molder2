import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'

export default ({ data: { prismicPosts } }) => {
    const { data, last_publication_date } = prismicPosts
    const metaData = {
        name: data.author.document.data.name.text,
        avatar: data.author.document.data.picture.url,
        published_at: last_publication_date
    }

    const previewText = data.body.text.substring(1, 200).concat("...")


    return (
        <React.Fragment>
            <Layout
                title={data.title.text}
                subTitle={data.subtitle.text}
                meta={metaData}
                text
            >
                <Helmet>
                    { data.preview_image.url && <meta property="og.:image" content={data.preview_image.url} /> }
                    <meta property="description" content={previewText} />
                    <meta property="og:title" content={data.title.text} />
                    <meta property="og:type" content="article" />
                    <meta property="article:author" content={metaData.name} />
                    <meta property="article:published_time" content={metaData.published_at} />
                </Helmet>
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
                body { html text }
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
                preview_image { url }
            }
        }
    }
`