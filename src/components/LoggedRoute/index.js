import { Route } from 'react-router-dom'

// Utils
import ProtectedRoute from 'components/ProtectedRoute'
import HeaderApplication from 'components/HeaderApplication'

const LoggedRoute = props => {
  console.log('[ LoggedRoute ]')

  return (
    <>
      <HeaderApplication />
      <Route {...props} />
    </>
  )
}

export default LoggedRoute
