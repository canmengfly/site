import React from 'react'
import PropTypes from 'prop-types'

import { Flex, ThemeProvider } from 'serverless-design-system'
import Head from 'src/fragments/Head'
import initializeAnalytics from 'src/utils/analytics/init'
import Scripts from 'src/fragments/GlobalScripts'
import './index.css'

class Layout extends React.Component {

  // Initial App mount. Happens once
  componentDidMount() {
    initializeAnalytics()
  }

  render() {
    const { children, location } = this.props

    return (
      <Flex width={1}>
        <Head />
        <ThemeProvider>
          { children() }
        </ThemeProvider>
        <Scripts
          path={location && location.pathname}
          query={location && location.search}
        />
      </Flex>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
