import { Router, Route, Switch } from 'react-router-dom'

// Utils
import ROUTES from 'routes'

// App History
import history from 'utils/app-history'

// Pages (Routes)
import AuthenticatedRoute from '../../layouts/AuthenticatedRoute'
import Login from '../../pages/Login'
import LandingRoute from '../../layouts/LandingRoute'
import Landing from '../../pages/Landing'
import Experimental from '../../pages/Experimental'
import JestTraining from '../../pages/JestTraining'
import Home from '../../pages/Home'

const AppRoutes = () => {
  return (
    <Router history={history}>
      <Switch>
        <LandingRoute path={ROUTES.ROOT} exact component={Landing} />
        <LandingRoute path={ROUTES.LOGIN} component={Login} />
        {/* <LandingRoute path={ROUTES.SIGN_UP} component={SignUp} /> */}
        <LandingRoute path={ROUTES.EXPERIMENTAL} exact component={Experimental} />
        <LandingRoute path={ROUTES.JEST_TRAINING} component={JestTraining} />
        <AuthenticatedRoute path={ROUTES.HOME} component={Home} />
        {/* <AuthenticatedRoute path={ROUTES.NEW} component={New} /> */}
        {/* <AuthenticatedRoute path={ROUTES.CONFIG} component={Config} /> */}
      </Switch>
    </Router>
  )
}

export default AppRoutes
