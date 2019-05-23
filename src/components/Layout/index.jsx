import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import { Container } from 'semantic-ui-react'

import SiteNavigation from '../SiteNavigation'

import 'prismjs/themes/prism-solarizedlight.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'semantic-ui-css/semantic.min.css' /* Import Semantic-UI CSS */

const MENU_ITEMS = [
    { name: "bio", href: "/bio" },
    { name: "blog", href: "/blog" },
]

const StyledContainer = styled(Container)`
    min-height: 100%;
    margin: 60px auto 100px;

    img, iframe, pre, code {
        width: 100%;
    }

    a {
        text-decoration: underline;
        color: #24292E;
    }
`

const MetaContainer = styled.div`
    min-height: 48px;
    margin: 0 0 38px;
`

const SubTitle = styled.h2`
    color: rgb(132, 132, 132);
    font-size: 20px;
    font-weight: 300;
    margin: 0 0 36px;
`

const Page = (props) => {
    const { children, title, subTitle, meta, text } = props

    return (
        <React.Fragment>
            <SiteNavigation items={MENU_ITEMS} />
            <StyledContainer text={text && text}>
                <Helmet>
                    <title>{ title ? `${title} | molder` : `molder` }</title>
                </Helmet>

                    <MetaContainer />
                    { title && <h1>{title}</h1> }
                    { subTitle && <SubTitle>{subTitle}</SubTitle>}
                    { children }
            </StyledContainer>
        </React.Fragment>
    )
}

Page.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object
    ]).isRequired,
    title: PropTypes.string,
    subTitle: PropTypes.string,
    text: PropTypes.bool,
}

export default Page