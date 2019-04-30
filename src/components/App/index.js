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

class App extends Component {
  componentDidMount() {
    const token = localStorage.getItem('app-token')

    if (token) {
      this.props.handleLogIn()
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


const mapDispatchToProps = dispatch => ({
  handleLogIn: () => dispatch(logUser())
})

export default connect(
  null,
  mapDispatchToProps
)(App)
