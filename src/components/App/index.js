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
import { parseUserData } from 'utils/authentication'

class App extends Component {
  componentDidMount() {
    console.log('....Starting the application...\n ...Checking if a user is logged...')
    const UID = localStorage.getItem('UID')

    const [userIsLogged, userData] = parseUserData(UID)

    if (userIsLogged) {
      console.log('User Can be logged')
      this.props.logUser(userData)
      return
    }

    console.log('User Can`t be logged')
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
