import React from 'react'
import  Link  from 'gatsby-link'
import { Icon } from 'semantic-ui-react'
import { graphql, StaticQuery } from 'gatsby'
import PropTypes from 'prop-types'

import navigationStyles from './navigation.module.scss'
import staticLinks from './links.json'

export const StaticNavigation = () => (
    <div className={navigationStyles.container}>
        {staticLinks.map((node, key) => {
            const { name, icon, href } = node

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