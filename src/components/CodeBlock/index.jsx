import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import prismStyles from '../../styles/prism'

const StyledContainer = styled.div`
    /* ${prismStyles}; */
    ${input =>
        console.log("CSS", input)}
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

const CodeBlock = ({ input }) => {
    console.log(input)
    const title = input.primary.file_name

    return input.primary.file_name ?  (
        <React.Fragment>
            <Title>{title}</Title>
            <StyledContainer dangerouslySetInnerHTML={{ __html: input.primary.code_block.html }} />
        </React.Fragment>
    ) : <StyledContainer dangerouslySetInnerHTML={{ __html: input.primary.code_block.html }} />
}

CodeBlock.propTypes = {
    input: PropTypes.object.isRequired
}

export default CodeBlock