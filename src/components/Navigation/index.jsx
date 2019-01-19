import React from 'react'
import  Link  from 'gatsby-link'
import { Icon } from 'semantic-ui-react'
import { graphql, StaticQuery } from 'gatsby'
import PropTypes from 'prop-types'

import navigationStyles from './navigation.module.scss'

const Navigation = ({data}) => (
    <div className={navigationStyles.container}>
        { data.allLinksJson && data.allLinksJson.edges.map((node, key) => {
            const { name, icon, href } = node.node

            /* Use <a> for external href */
            return (href[0] !== "/")
                ? <a key={key} href={href}>{icon && <Icon name={icon} />} {name && name}</a>
                : <Link key={key} to={href}>{icon && <Icon name={icon} />} {name && name}</Link>
        })}
    </div>
)

export default insertProps => (
    <StaticQuery query={query} render={data => <Navigation data={data} {...insertProps} />} />
)

const query = graphql`
    query {
        allLinksJson(sort: { fields: ordering}) {
            edges {
                node {
                    name
                    icon
                    href
                    ordering
                }
            }
        }
    }
`

Navigation.propTypes = {
    data: PropTypes.shape({
        allLinksJson: PropTypes.shape({
            edges: PropTypes.arrayOf(
                PropTypes.shape({
                    node: PropTypes.shape({
                        ordering: PropTypes.number.isRequired,
                        name: PropTypes.string,
                        href: PropTypes.string.isRequired,
                        icon: PropTypes.string
                    }).isRequired
                }).isRequired
            ).isRequired
        }).isRequired
    }).isRequired
}