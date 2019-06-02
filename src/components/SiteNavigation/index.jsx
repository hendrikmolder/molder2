import React from "react"
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'

const NavigationContainer = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    padding: 20px 30px 10px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`

const StyledLink = styled(Link)`
    font-size: 14px;
    font-weight: 500;
    margin: 0 10px 0;
    color: rgb(132, 132, 132);

    :hover {
        text-decoration: underline;
        color: rgb(132, 132, 132);
    }

`

const SiteNavigation = (props) => {
    const { items } = props

    return (
        <NavigationContainer>
            <StyledLink to="/" activeStyle={{ color: 'black' }}>home</StyledLink>
            { items.map((item, key) => {
                const { name, href } = item

                return (
                    <StyledLink
                        to={href}
                        key={key}
                        activeStyle={{ color: 'black' }}
                        partiallyActive={true}
                    >
                        {name}
                    </StyledLink>
                )
            })}
        </NavigationContainer>
    )
}

SiteNavigation.propTypes = {
    items: PropTypes.array.isRequired,
}

export default SiteNavigation