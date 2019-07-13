import { Route } from 'react-router-dom'

// Utils
import ProtectedRoute from 'components/ProtectedRoute'

// Pages (Routes)
import Home from 'pages/Home'
import New from 'pages/New'
import SignUp from 'pages/SignUp'
import Config from 'pages/Config'
import Login from 'pages/Login'

const AppRoutes = () => {
  return (
    <>
      <Route
        path="/"
        exact
        render={routeProps => <ProtectedRoute Page={Home} {...routeProps} />}
      />
      <Route
        path="/new"
        exact
        render={routeProps => <ProtectedRoute Page={New} {...routeProps} />}
      />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/login" component={Login} />
      <Route
        path="/config"
        exact
        render={routeProps => <ProtectedRoute Page={Config} {...routeProps} />}
      />
    </>
  )
}

export default AppRoutes
