import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { DiscussionEmbed } from 'disqus-react'

import Layout from '../components/Layout'
import SliceWrapper from '../components/SliceWrapper'

export default ({ data: { prismicPosts } }) => {
    const { data, last_publication_date, uid } = prismicPosts
    const metaData = {
        name: data.author.document.data.name.text,
        avatar: data.author.document.data.picture.url,
        published_at: last_publication_date
    }
    const disqusShortname = 'molder3'
    const disqusConfig = {
        identifier: uid,
        title: data.title.text
    }

    return (
        <React.Fragment>
            <Layout
                title={data.title.text}
                subTitle={data.subtitle.text}
                meta={metaData}
                text
            >
                <Helmet>
                    { data.preview_image && <meta property="og:image" content={data.preview_image.url} /> }
                    <meta property="og:title" content={data.title.text} />
                    <meta property="og:type" content="article" />
                    <meta property="article:author" content={metaData.name} />
                    <meta property="article:published_time" content={metaData.published_at} />
                </Helmet>
                <SliceWrapper slices={data.body} />
                { JSON.parse(data.enable_comments) && <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} /> }
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
                preview_image { url }
                enable_comments
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
                body {
                    ...on PrismicPostsBodyCodeBlock {
                        id
                        slice_type
                        primary {
                            code_block {
                                html
                            }
                        }
                    }
                    ...on PrismicPostsBodyText {
                        id
                        slice_type
                        primary {
                            body {
                                html
                            }
                        }
                    }
                }
            }
        }
    }
`