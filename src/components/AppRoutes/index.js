import { Route } from 'react-router-dom'

// Pages (Routes)
import Home from 'pages/Home'
import New from 'pages/New'
import SignUp from 'pages/SignUp'
import Config from 'pages/Config'
import Login from 'pages/Login'

const AppRoutes = () => {
  return (
    <>
      <Route path="/" exact component={Home} />
      <Route path="/new" component={New} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/login" component={Login} />
      <Route path="/config" component={Config} />
    </>
  )
}

export default AppRoutes
