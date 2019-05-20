import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'

import Logo from '../components/Logo'
import './styles/global.module.scss'

const Layout = styled.div`
    text-align: center;
    /* position: absolute; temporary hack */
    height: 100%;
    width: 100% !important;
`

const StyledLogo = styled(Logo)`
    margin-top: 216px ;
`


const Landing = () => (
    <Layout>
        <Helmet>
            <title>molder</title>
        </Helmet>
        <StyledLogo width={486}/>
    </Layout>
)

export default Landing