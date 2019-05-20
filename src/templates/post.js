import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export default ({ data: { prismicPosts } }) => {
    const { data } = prismicPosts

    return (
        <React.Fragment>
            <Layout title={data.title.text} subTitle={data.subtitle.text}>
                <div dangerouslySetInnerHTML={{ __html: data.body.html }} />
            </Layout>
        </React.Fragment>
    )
}

export const pageQuery = graphql`
    query PostBySlug($uid: String!) {
        prismicPosts(uid: { eq: $uid }) {
            uid
            data {
                title { text }
                subtitle { text }
                body { html }
            }
        }
    }
`