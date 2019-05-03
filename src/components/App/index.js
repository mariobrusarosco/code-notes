// TO DO
// Remove console.log

// Vendor
import React, { Component } from 'react'
import { Router } from 'react-router-dom'
import { connect } from 'react-redux'

// Components
import Header from 'components/Header'

// Aoo Routes
import AppRoutes from 'components/AppRoutes'

// App History
import history from 'utils/app-history'

// Actions
import { logUser } from 'actions'

// Utils
import codeNotesAPI from 'api/code-notes'
import { decodeToken } from 'utils/authentication'

class App extends Component {
  componentDidMount() {
    console.log('....Starting the application...')

    const { userAllowed, userData } = decodeToken()

    if (userAllowed) {
      console.log('dispatching')
      return this.props.logUser({ userAllowed, userData })
    }
    else {
      console.log('no token')
    }
  }

  render() {
    return (
      <div className="main">
        <Router history={history} >
          <Header />
          <AppRoutes />
        </Router>
      </div>
    )
  }
}


export default connect(
  null,
  { logUser }
)(App)
