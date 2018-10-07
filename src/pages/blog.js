import React from "react"
import { graphql } from 'gatsby'

import Page from '../components/Page'

import pagesStyles from './styles/index.module.scss'

export default ({data}) => {

    return (
        <Page title="Blog" className={pagesStyles.container}>
            <p>hi</p>
        </Page>
    )
}
