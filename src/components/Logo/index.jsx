import React from 'react'
import logo from './assets/2019.png'

const Logo = (props) => {
    const { width } = props


    return (
        <img
            src={logo}
            alt='Logo'
            width={width && width}
        />
    )
}

export default Logo