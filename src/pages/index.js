import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby';

import Layout from '../components/Layout'

import './styles/global.module.scss'


const Hero = styled.h1`
    font-size: 4rem;
    font-weight: 700;
    padding: 0 0 1.5rem;
`

const StyledLayout = styled(Layout)`
    text-align: center;
    padding-top: 216px;
    text-align: center;
`

const StyledLinkContainer = styled.div`
    display: flex;
    justify-content: center;

    a {
        color: #80bfff !important;
        text-decoration: none !important;
        margin: 0 0.5rem 0;

        :hover {
            color: #0080ff !important;
        }
    }
`

const Landing = () => (
    <StyledLayout text noMenu>
        <Hero>Hi, I'm Hendrik</Hero>
        <StyledLinkContainer>
            <a href="https://github.com/hendrikmolder">github</a>
            <a href="https://linkedin.com/in/hendrikmolder">linkedin</a>
            <Link to="/music">music</Link>
            <Link to="/blog">posts</Link>
        </StyledLinkContainer>

    </StyledLayout>
)

export default Landing