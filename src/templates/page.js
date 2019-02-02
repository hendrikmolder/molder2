import React from 'react'
import { graphql } from 'gatsby'
import Page from '../components/Page'

export default ({ data }) => {
    const { markdownRemark: page } = data
    return (
        <Page
            title={page.frontmatter.title}
            showTitle={page.frontmatter.showTitle}
        >
            <div dangerouslySetInnerHTML={{ __html: page.html }} />
        </Page>
    )
}

export const PageTemplate = ({ title, showTitle, content }) => (
    <Page
        title={title}
        showTitle={showTitle}
    >
        {content}
    </Page>
)

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