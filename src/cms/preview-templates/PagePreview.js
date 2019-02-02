import React from 'react'
import PropTypes from 'prop-types'

import { PageTemplate } from '../../templates/page'

const PagePreview = ({ entry, widgetFor }) => (
    <PageTemplate
        title={entry.getIn(['data', 'title'])}
        showTitle={entry.getIn(['data', 'showTitle'])}
        content={widgetFor('body')}
    />
)

PagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    widgetFor: PropTypes.func,
}

export default PagePreview