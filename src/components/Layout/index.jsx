import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import { Container } from 'semantic-ui-react'

import SiteNavigation from '../SiteNavigation'
import PageMetadata from '../PageMetadata'

const MENU_ITEMS = [
    { name: "linkedin", href: "https://linkedin.com/in/hendrikmolder" },
    { name: "music", href: "/music" },
    { name: "posts", href: "/blog" },
]

const StyledContainer = styled(Container)`
    min-height: 100%;
    margin: 60px auto 100px;
    font-family: 'Inter', sans-serif !important;

    img, iframe, pre, code {
        width: 100%;
    }

    a {
        text-decoration: underline;
        color: #24292E;
    }
`

const MetaContainer = styled.div`
    margin: 0 0 24px;
`

const SubTitle = styled.h2`
    color: rgb(132, 132, 132);
    font-size: 20px;
    font-weight: 300;
    margin: 0 0 36px;
`

const Layout = (props) => {
    const { children, title, showTitle, subTitle, meta, text, className, noMenu } = props
    return (
        <React.Fragment>
            { !noMenu && <SiteNavigation items={MENU_ITEMS} /> }
            <StyledContainer text={text && text} className={className}>
                <Helmet>
                    <title>{ title ? `${title} | molder` : `molder` }</title>
                </Helmet>

                { meta && (
                    <MetaContainer>
                        <PageMetadata {...meta} />
                    </MetaContainer>
                )}

                { showTitle !== "false" ? title && <h1>{title}</h1> : null}
                { subTitle && <SubTitle>{subTitle}</SubTitle>}
                { children }
            </StyledContainer>
        </React.Fragment>
    )
}

Layout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object
    ]).isRequired,
    title: PropTypes.string,
    showTitle: PropTypes.string,
    subTitle: PropTypes.string,
    text: PropTypes.bool,
    meta: PropTypes.object,
    className: PropTypes.string,
    noMenu: PropTypes.bool
}

export default Layout