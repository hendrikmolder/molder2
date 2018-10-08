import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import 'semantic-ui-css/semantic.min.css' /* Import Semantic-UI CSS */

import Navigation from '../Navigation'

import pageStyles from './page.module.css'

export default class Page extends Component {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.object
        ]).isRequired,
        title: PropTypes.string.isRequired,
        show_title: PropTypes.bool
    }

    render() {
        const { children, title, show_title } = this.props

        return (
            <div className={pageStyles.container}>
                <Helmet>
                    <title>molder | { title }</title>
                </Helmet>
                <Navigation />

                { show_title && `<h1>${title}</h1>` }
                { children }
            </div>
        )
    }
}