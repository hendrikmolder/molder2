import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export default ({ data: { prismicPage } }) => {
    const { data } = prismicPage

    return (
        <React.Fragment>
            <Layout title={data.title.text} subTitle={data.subtitle.text} text>
                <div dangerouslySetInnerHTML={{ __html: data.content.html }} />
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
                content { html }
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
            }
        }
    }
`