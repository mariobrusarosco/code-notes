import { Router, Route, Switch } from 'react-router-dom'

// Utils
import ROUTES from 'routes'

// App History
import history from 'utils/app-history'

// Pages (Routes)
import Home from 'pages/Home'
import New from 'pages/New'
import Landing from 'pages/Landing'
import SignUp from 'pages/SignUp'
import Config from 'pages/Config'
import Experimental from 'pages/Experimental/index.tsx'

// Layouts
import LandingRoute from 'components/LandingRoute'
import LoggedRoute from 'components/LoggedRoute'

import Login from 'pages/Login'

const AppRoutes = () => {
  return (
    <Router history={history}>
      <Switch>
        <LandingRoute path={ROUTES.ROOT} exact component={Landing} />
        <LandingRoute path={ROUTES.LOGIN} component={Login} />
        <LandingRoute path={ROUTES.SIGN_UP} component={SignUp} />
        <LandingRoute path={ROUTES.EXPERIMENTAL} component={Experimental} />
        <LoggedRoute path={ROUTES.HOME} component={Home} />
        <LoggedRoute path={ROUTES.NEW} component={New} />
        <LoggedRoute path={ROUTES.CONFIG} component={Config} />
      </Switch>
    </Router>
  )
}

export default AppRoutes
