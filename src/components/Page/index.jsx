import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navigation from '../Navigation'

import pageStyles from './page.module.css'

export default class Page extends Component {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.object
        ]).isRequired,
        title: PropTypes.string.isRequired
    }

    render() {
        const { children, title } = this.props

        return (
            <div className={pageStyles.container}>
                <Helmet>
                    <title>molder | { title }</title>
                </Helmet>
                <Navigation />

                <h1>{ title }</h1>
                { children }
            </div>
        )
    }
}