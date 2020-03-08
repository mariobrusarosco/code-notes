// Vendor
import { hot } from 'react-hot-loader/root'
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom'
import { lazy, Suspense } from 'react'

import LandingRoute from '../../layouts/LandingRoute'
import Experimental from '../../pages/Experimental'
import JestTraining from '../../pages/JestTraining'
import AuthenticatedRoute from '../../layouts/AuthenticatedRoute'
import { ROUTES } from '../../enums/ROUTES'
const Landing = lazy(() => import('../../pages/Landing'))
const Home = lazy(() => import('../../pages/Home'))

// import { useEffect, useContext } from 'react'
// import cookie from 'js-cookie'

// Components
// import AppLoader from 'components/Loaders/AppLoader'

// Aoo Routes
// import AppRoutes from 'components/AppRoutes/index.tsx'

// Actions
// import { setAppAsLoaded } from 'actions/App'
// import { logUser } from 'actions/Authentication'

// Context
// import { AuthenticationContext } from 'contexts/AuthenticationContext'
// import { AppContext } from 'contexts/AppContext'

// Utils
// import { decodeToken } from 'utils/authentication'
// import LandingRoute from '../LandingRoute'
// import Experimental from '../../pages/Experimental'
// import JestTraining from '../../pages/JestTraining'
// import LoggedRoute from '../LoggedRoute'

const Loader = () => <div>Loading</div>
const App: React.FC = () => {
  // const { AuthenticationDispatch } = useContext(AuthenticationContext)
  // const { App, AppDispatch } = useContext(AppContext)

  // useEffect(() => {
  //   console.log('....Starting the application...')

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
  // }, [])

  return (
    <div className="main">
      {/* <AppRoutes /> */}
      <BrowserRouter>
        <header>
          <NavLink to="/" activeClassName="active">
            Root
          </NavLink>
          <NavLink to="/home" activeClassName="active">
            Home
          </NavLink>
        </header>
        <Switch>
          {/* <LandingRoute path={ROUTES.ROOT} exact component={Landing} />
          <AuthenticatedRoute path={ROUTES.HOME} component={Home} /> */}
          <Suspense fallback={<Loader />}>
            <Route path={ROUTES.ROOT} exact component={Landing} />
            <Route path={ROUTES.HOME} component={Home} />
          </Suspense>
          {/* <LandingRoute path={ROUTES.LOGIN} component={Login} />
          <LandingRoute path={ROUTES.SIGN_UP} component={SignUp} />
          <LandingRoute path={ROUTES.EXPERIMENTAL} exact component={Experimental} />
          <LandingRoute path={ROUTES.JEST_TRAINING} component={JestTraining} /> */}
          {/* <LoggedRoute path={ROUTES.NEW} component={New} /> */}
          {/* <LoggedRoute path={ROUTES.CONFIG} component={Config} /> */}
        </Switch>
      </BrowserRouter>
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
