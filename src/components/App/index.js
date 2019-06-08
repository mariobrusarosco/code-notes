// TO DO
// Remove console.log

// Vendor
import { hot } from 'react-hot-loader/root'
import React, { Component } from 'react'
import { Router } from 'react-router-dom'
import { connect } from 'react-redux'
import cookie from 'js-cookie'

// Components
import AppLoader from 'components/Loaders/AppLoader'
import Header from 'components/Header'

// Aoo Routes
import AppRoutes from 'components/AppRoutes'

// App History
import history from 'utils/app-history'

// Actions
import { logUser, setAppAsLoaded } from 'actions'

// Utils
import codeNotesAPI from 'api/code-notes'
import { decodeToken } from 'utils/authentication'

class App extends Component {
  componentDidMount() {
    console.log('....Starting the application...')
    // TODO -- DRY
    // Retrieving User's Cookie
    const token = cookie('P_U')
    const { userAllowed, userData } = decodeToken(token)

    if (userAllowed) {
      // console.log('dispatching')
      this.props.logUser({ userAllowed, userData })
    } else {
      console.log('no token')
    }

    setTimeout(this.props.setAppAsLoaded, 1500)
  }

  render() {
    if (!this.props.appIsLoaded) {
      return <AppLoader />
    }

    return (
      <div className="main">
        <Router history={history}>
          <Header />
          <AppRoutes />
        </Router>
      </div>
    )
  }
}

const mapStateToProps = ({ app }) => ({
  appIsLoaded: app?.appIsLoaded
})

const connectedApp = connect(
  mapStateToProps,
  { logUser, setAppAsLoaded }
)(App)

export default hot(connectedApp)
