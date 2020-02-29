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
import JestTraining from 'pages/JestTraining/index.tsx'

// Layouts
import LandingRoute from 'components/LandingRoute/index.tsx'
import LoggedRoute from 'components/LoggedRoute/index.tsx'

import Login from 'pages/Login'

const AppRoutes = () => {
  return (
    <Router history={history}>
      <Switch>
        <LandingRoute path={ROUTES.ROOT} exact component={Landing} />
        <LandingRoute path={ROUTES.LOGIN} component={Login} />
        <LandingRoute path={ROUTES.SIGN_UP} component={SignUp} />
        <LandingRoute path={ROUTES.EXPERIMENTAL} exact component={Experimental} />
        <LandingRoute path={ROUTES.JEST_TRAINING} component={JestTraining} />
        <LoggedRoute path={ROUTES.HOME} component={Home} />
        <LoggedRoute path={ROUTES.NEW} component={New} />
        <LoggedRoute path={ROUTES.CONFIG} component={Config} />
      </Switch>
    </Router>
  )
}

export default AppRoutes
