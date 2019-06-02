import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Image } from 'semantic-ui-react'
import Moment from 'react-moment'

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    line-height: 16px;
    font-size: 14px;
    font-weight: 400;
`

const Container = styled.div`
    display: flex;
    justify-items: center;
`

const StyledMoment = styled(Moment)`
    font-size: 14px;
    font-weight: 400;
    color: rgb(132, 132, 132);
`

const PageMetadata = (props) => {
    const { avatar, name, published_at } = props

    return (
        <Container>
            <Image src={avatar} avatar />
            <TextContainer>
                {name}
                <StyledMoment format="Do MMMM YYYY" date={published_at}/>
            </TextContainer>
        </Container>
    )
}

PageMetadata.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    published_at: PropTypes.string.isRequired
}

export default PageMetadata