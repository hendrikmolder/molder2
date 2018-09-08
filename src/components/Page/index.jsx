import React, { Component } from 'react'
import PropTypes from 'prop-types'

import pageStyles from './page.module.css'

export default class Page extends Component {
    static propTypes = {
        children: PropTypes.object
    }

    render() {
        const { children } = this.props

        return (
            <div className={pageStyles.container}>
                { children }
            </div>
        )
    }
}