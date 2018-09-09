import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faHeadphonesAlt } from '@fortawesome/free-solid-svg-icons'
import  Link  from 'gatsby-link'

import navigationStyles from './navigation.module.css'

export default class Navigation extends Component {
    render() {
        return (
            <div className={navigationStyles.container}>
                <Link to="/" className={navigationStyles.link}><FontAwesomeIcon icon={faHome} /></Link>
                <Link to="/music" className={navigationStyles.link}><FontAwesomeIcon icon={faHeadphonesAlt} /> Music</Link>
            </div>
        )
    }
}