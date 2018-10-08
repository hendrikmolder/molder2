import React from 'react'
import { graphql } from 'gatsby'
import Page from '../components/Page'

export default ({ data }) => {
    const page = data.markdownRemark
    return (
        <Page {...page.frontmatter}>
            <div dangerouslySetInnerHTML={{ __html: page.html }} />
        </Page>
    )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                showTitle
            }
        }
    }
`