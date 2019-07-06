import React, { useEffect } from 'react'
import { navigate } from 'gatsby'
import { usePrismicPreview } from 'gatsby-source-prismic'

import Layout from '../components/Layout'
import linkResolver from '../utils/linkResolver'

const PreviewPage = ({ location }) => {
    const { previewData, path } = usePrismicPreview(location, {
        linkResolver: ({ node, key, value }) => doc => linkResolver(doc),
        htmlSerializer: ({ node, key, value }) => () => {},
    })

    useEffect(() => {
        if (previewData) {
            navigate(path, {
                state: { previewData: JSON.stringify(previewData)}
            })
        }
    }, [previewData, path])
    
    return <Layout title='Loading preview...'>This might take a moment.</Layout>
}

export default PreviewPage