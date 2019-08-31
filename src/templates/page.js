import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from '../components/Layout'

export default ({ data: { mdx } }) => (
  <React.Fragment>
    <Layout
      title={mdx.frontmatter.title}
      subTitle={mdx.frontmatter.subtitle && mdx.frontmatter.subtitle}
      showTitle={JSON.parse(mdx.frontmatter.showTitle)}
      text
    >
      <Helmet>
        <meta property="og:title" content={mdx.frontmatter.title} />
        <meta property="og:type" content="website" />
      </Helmet>
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </Layout>
  </React.Fragment>
)

export const pageQuery = graphql`
  query PageBySlug($id: String!) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        subtitle
        date
        showTitle
      }
    }
  }
`
