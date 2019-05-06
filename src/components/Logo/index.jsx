import React from 'react'
import logo from './assets/2019.png'

const Logo = (props) => (
    <img
        src={logo}
        alt='logo'
        {...props}
    />
)

export default Logo