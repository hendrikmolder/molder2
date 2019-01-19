import React from 'react'
import { graphql } from 'gatsby'
import { Icon } from 'semantic-ui-react'
import Moment from 'react-moment'

import Page from '../components/Page'
import styles from './styles/post.module.scss'

export default ({ data }) => {
    const post = data.markdownRemark

    return (
        <Page {...post.frontmatter} showTitle>
            <div className={styles.metaContainer}>
                <span><Icon name='calendar alternate outline' /> <Moment format='DD MMM YYYY'>{post.frontmatter.date}</Moment></span>
                <span><Icon name='clock outline' /> {post.timeToRead} minute read</span>
            </div>

            <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Page>
    )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            timeToRead
            frontmatter {
                title
                author
                date
            }
        }
    }
`