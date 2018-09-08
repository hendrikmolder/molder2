import React, { Component } from 'react'
import PropTypes from 'prop-types'

import pageStyles from './page.module.css'

export default class Page extends Component {
    static propTypes = {
        children: PropTypes.object,
        title: PropTypes.string.isRequired
    }

    render() {
        const { children, title } = this.props

        return (
            <div className={pageStyles.container}>
                <h1>{ title }</h1>
                { children }
            </div>
        )
    }
}