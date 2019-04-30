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
      <Route path="/" exact component={ProtectedRoute(Home)} />
      <Route path="/new" component={ProtectedRoute(New)} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/login" component={Login} />
      <Route path="/config" component={ProtectedRoute(Config)} />
    </>
  )
}

export default AppRoutes
