import React from "react"
import { graphql } from 'gatsby'

import Page from '../components/Page'

import './styles/global.module.scss'

export default ({data}) => (
    <Page title="Hi there." showTitle>
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