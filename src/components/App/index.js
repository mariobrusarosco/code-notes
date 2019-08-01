// Vendor
import { hot } from 'react-hot-loader/root'
import { useEffect, useContext } from 'react'
import { Router } from 'react-router-dom'
import cookie from 'js-cookie'

// Components
import AppLoader from 'components/Loaders/AppLoader'
import Header from 'components/Header'

// Aoo Routes
import AppRoutes from 'components/AppRoutes'

// App History
import history from 'utils/app-history'

// Actions
import { setAppAsLoaded } from 'actions/App'
import { logUser } from 'actions/Authentication'

// Context
import { AuthenticationContext } from 'contexts/AuthenticationContext'
import { AppContext } from 'contexts/AppContext'

// Utils
import { decodeToken } from 'utils/authentication'

const App = () => {
  const { AuthenticationDispatch } = useContext(AuthenticationContext)
  const { App, AppDispatch } = useContext(AppContext)

  useEffect(() => {
    console.log('....Starting the application...')

    // Retrieving User's Cookie
    // const token = cookie('P_U')
    // const { userIsLogged, userData } = decodeToken(token)

    // If the cookie is valid...pass its content into the Auth Provider
    // if (userIsLogged) {
    //   AuthenticationDispatch(logUser({ userIsLogged, userData }))
    // } else {
    //   console.log('no token')
    //   history.push('/login')
    // }

    // setTimeout(() => AppDispatch(setAppAsLoaded()), 1500)
  }, [])

  return (
    <div className="main">
      <Router history={history}>
        <Header />
        <AppRoutes />
      </Router>
    </div>
  )

  // return !App.appIsLoaded ? (
  //   <AppLoader />
  // ) : (
  //   <div className="main">
  //     <Router history={history}>
  //       <Header />
  //       <AppRoutes />
  //     </Router>
  //   </div>
  // )
}

export default hot(App)
