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

class App extends Component {
  componentDidMount() {
    console.log('....Starting the application...\n ...Checking if a user is logged...')
    const UID = localStorage.getItem('UID')

    codeNotesAPI.get('/me')
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
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


const mapDispatchToProps = dispatch => ({
  handleLogIn: () => dispatch(logUser())
})

export default connect(
  null,
  mapDispatchToProps
)(App)
