import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'
import SliceWrapper from '../components/SliceWrapper'

export default ({ data: { prismicPage } }) => {
    const { data } = prismicPage

    return (
        <React.Fragment>
            <Layout title={data.title.text} subTitle={data.subtitle.text} text showTitle={data.show_title}>
                <Helmet>
                    <meta property="og:title" content={data.title.text} />
                    <meta property="og:type" content="website" />
                </Helmet>
                <SliceWrapper slices={data.body} />
            </Layout>
        </React.Fragment>
    )
}

export const pageQuery = graphql`
    query PageByUid($uid: String!) {
        prismicPage(uid: { eq: $uid }) {
            uid
            data {
                title { text }
                subtitle { text }
                show_title
                author {
                    document {
                        ...on PrismicPerson {
                            data {
                                name {
                                    text
                                }
                            }
                        }
                    }
                }
                last_updated
                body {
                    ...on PrismicPageBodyCodeBlock {
                        id
                        slice_type
                        primary {
                            file_name
                            code_block {
                                html
                            }
                        }
                    }
                    ...on PrismicPageBodyText {
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