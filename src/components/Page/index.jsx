import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import 'semantic-ui-css/semantic.min.css' /* Import Semantic-UI CSS */

import Navigation from '../Navigation'

import pageStyles from './page.module.scss'

export default class Page extends Component {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.object
        ]).isRequired,
        title: PropTypes.string.isRequired,
        showTitle: PropTypes.bool
    }

    showTitle = () => {
        const { title } = this.props

        return <h1>{ title }</h1>
    }

    render() {
        const { children, title, showTitle } = this.props

        return (
            <div className={pageStyles.container}>
                <Helmet>
                    <title>molder | { title }</title>
                </Helmet>
                <Navigation />

                { showTitle && this.showTitle() }
                { children }
            </div>
        )
    }
}