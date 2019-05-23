import React from 'react'
import renderer from 'react-test-renderer'

import Layout from './index'

const TEST_TITLE = 'Test'
const TEST_SUBTITLE = 'test'

describe('Layout', () => {
    it('renders correctly with title', () => {
        const tree = renderer
            .create(<Layout title={TEST_TITLE} subTitle={TEST_SUBTITLE}><p>test</p></Layout>)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })

    it('renders correctly without title', () => {
        const tree = renderer
            .create(<Layout><p>test</p></Layout>)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})