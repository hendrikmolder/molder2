import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { DiscussionEmbed } from 'disqus-react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from '../components/Layout'

export default ({ data: { mdx } }) => {
  // const metaData = {
  //   name: data.author.document.data.name.text,
  //   avatar: data.author.document.data.picture.url,
  //   published_at: last_publication_date,
  // }
  const disqusShortname = 'molder3'
  const disqusConfig = {
    identifier: mdx.frontmatter.slug,
    title: mdx.frontmatter.title,
  }

  return (
    <React.Fragment>
      <Layout
        title={mdx.frontmatter.title}
        subTitle={mdx.frontmatter.subtitle}
        // meta={metaData}
        text
      >
        <Helmet>
          {mdx.frontmatter.thumbnail && (
            <meta property="og:image" content={mdx.frontmatter.thumbnail} />
          )}
          <meta property="og:title" content={mdx.frontmatter.title} />
          <meta property="og:type" content="article" />
          <meta property="article:author" content={'Hendrik Molder'} />
          <meta
            property="article:published_time"
            content={mdx.frontmatter.date}
          />
        </Helmet>
        {/* <SliceWrapper slices={data.body} /> */}
        <MDXRenderer>{mdx.body}</MDXRenderer>
        {JSON.parse(mdx.frontmatter.enable_comments) && (
          <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
        )}
      </Layout>
    </React.Fragment>
  )
}

export const pageQuery = graphql`
  query PostBySlug($id: String!) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        subtitle
        date
        enable_comments
      }
    }
  }
`
