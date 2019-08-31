import React from 'react'
import * as Sentry from '@sentry/browser'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error })
    Sentry.configureScope(scope => {
      Object.keys(errorInfo).forEach(key => {
        scope.setExtra(key, errorInfo[key])
      })
    })
    Sentry.captureException(error)
  }

  render() {
    if (this.state.error) {
      return <h1>Hmm... Something went wrong.</h1>
    } else {
      return this.props.children
    }
  }
}
