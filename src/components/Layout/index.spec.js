import React from 'react'
import renderer from 'react-test-renderer'

import Layout from './index'

const TEST_TITLE = 'Test'
const TEST_SUBTITLE = 'test'

describe('Layout', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<Layout title={TEST_TITLE} subTitle={TEST_SUBTITLE}><p>test</p></Layout>)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})