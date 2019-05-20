import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import 'prismjs/themes/prism-solarizedlight.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'semantic-ui-css/semantic.min.css' /* Import Semantic-UI CSS */

const Container = styled.div`
    /* padding: 40px; */
    width: 950px;
    min-height: 100%;
    margin: 60px auto 0;

    display: flex;
    justify-content: space-between;
`

const MenuContainer = styled.div`
    margin: 155px 0 0;
    width: 110px;
    text-decoration: none;
    text-align: right;
    font-weight: bold;
    font-size: 18px;
    display: flex;
    flex-direction: column;

    >a {
        text-decoration: none;
        color: #000000;
        margin: 0 0 6px;
    }
`

const MetaContainer = styled.div`
    min-height: 48px;
    margin: 0 0 38px;
`

const ContentContainer = styled.div`
    width: 770px;
    height: 100%;

    img, iframe, pre, code {
        max-width: 100%;
    }

    a {
        text-decoration: underline;
        color: #24292E;
    }
`

const SubTitle = styled.h2`
    color: rgb(132, 132, 132);
    font-size: 18px;
    font-weight: 300;
`

const Page = (props) => {
    const { children, title, subtitle, meta } = props

    return (
        <Container>
            <Helmet>
                <title>molder | { title }</title>
            </Helmet>

            <MenuContainer>
                <Link to='/'>home</Link>
                <Link to='/blog'>blog</Link>
                <Link to='/about-me'>bio</Link>
            </MenuContainer>

            <ContentContainer>
                <MetaContainer />
                { title && <h1>{title}</h1> }
                { subtitle && <SubTitle>{subtitle}</SubTitle>}
                { children }
            </ContentContainer>
        </Container>
    )
}

Page.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object
    ]).isRequired,
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string
}

export default Page