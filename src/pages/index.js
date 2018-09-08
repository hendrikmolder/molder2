import React from "react"
import { graphql } from 'gatsby'

import Page from '../components/Page'

export default ({data}) => (
    <Page title="Yup.">
        Hello world.
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </Page>
)

export const query = graphql`
    query {
        markdownRemark(frontmatter: {type: {eq: "landing"}}) {
            html
        }
    }
`