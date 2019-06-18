import React from 'react'
import PropTypes from 'prop-types'
import BodyText from '../BodyText'
import CodeBlock from '../CodeBlock';

const SliceWrapper = (props) => {
    const { slices } = props
    const slice = slices.map(s => {
        switch (s.slice_type) {
            case 'text':
                return <BodyText key={s.id} input={s} />
            case 'code_block':
                return <CodeBlock key={s.id} input={s} />
            default:
                return null
        }
    })

    return <React.Fragment>{slice}</React.Fragment>
}

SliceWrapper.propTypes = {
    slices: PropTypes.array.isRequired
}

export default SliceWrapper