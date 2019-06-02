import React from 'react'
import renderer from 'react-test-renderer'

import PageMetadata from './index'

const NAME = "test"
const DATE = "2019-06-02T14:49:07+0000"
const IMAGE = "https://localhost/image.jpeg"

describe('PageMetadata', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<PageMetadata name={NAME} published_at={DATE} avatar={IMAGE} />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})