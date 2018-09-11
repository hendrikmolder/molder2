import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import  Link  from 'gatsby-link'

import navigationStyles from './navigation.module.css'

export default class Navigation extends Component {
    render() {
        return (
            <div className={navigationStyles.container}>
                <Link to="/" className={navigationStyles.link}><FontAwesomeIcon icon={faHome} /></Link>
                <Link to="/music" className={navigationStyles.link}>Music</Link>
                <a href="https://linkedin.com/in/hendrikmolder" className={navigationStyles.link} alt="LinkedIn">LinkedIn</a>
                <a href="https://github.com/hendrikmolder" className={navigationStyles.link} alt="LinkedIn">GitHub</a>
            </div>
        )
    }
}