import React from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Logo from '../components/Logo'

import './styles/global.module.scss'

const StyledLogo = styled(Logo)`
    margin-top: 216px ;
`

const StyledLayout = styled(Layout)`
    text-align: center;
`

const Landing = () => (
    <StyledLayout text>
        <StyledLogo width={486}/>
    </StyledLayout>
)

export default Landing