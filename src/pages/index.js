import React from "react"
import { graphql } from 'gatsby'

import Page from '../components/Page'

import pagesStyles from './styles/index.module.scss'

export default ({data}) => (
    <Page title="Hi there." className={pagesStyles.container}>
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