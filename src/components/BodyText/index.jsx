import React from 'react'
import PropTypes from 'prop-types'

const BodyText = ({ input }) => <div dangerouslySetInnerHTML={{ __html: input.primary.body.html }} />

BodyText.propTypes = {
    input: PropTypes.object.isRequired
}

export default BodyText