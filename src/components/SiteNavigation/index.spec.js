import React from 'react'
import renderer from 'react-test-renderer'

import SiteNavigation from './index'

const TEST_MENU_ITEMS = [
    { name: "bio", href: "/" },
    { name: "blog", href: "/blog" },
]

describe('SiteNavigation', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<SiteNavigation items={TEST_MENU_ITEMS} />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})