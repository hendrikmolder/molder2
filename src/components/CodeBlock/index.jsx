import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledContainer = styled.div`
    ${props => props.title && `pre { margin-top: 0!important; border-radius: 0 0 0.3em 0.3em !important; }`}
`

const Title = styled.div`
    padding: 0.6rem 1rem;
    border-radius: 0.3em 0.3em 0 0;
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    font-size: 14px;
    line-height: 1.375;
    background: #f3a953;
    color: #fff;
`

const CodeBlock = ({ input }, props) => {
    const title = input.primary.file_name

    return (
        <StyledContainer title={title}>
            { title && <Title>{title}</Title> }
            <div dangerouslySetInnerHTML={{ __html: input.primary.code_block.html }} />
        </StyledContainer>
    )
}

CodeBlock.propTypes = {
    input: PropTypes.object.isRequired
}

export default CodeBlock