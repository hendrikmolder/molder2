import React from 'react'
import renderer from 'react-test-renderer'

import Layout from './index'

const TEST_TITLE = 'Test'

describe('Layout', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<Layout title={TEST_TITLE}><p>test</p></Layout>)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})