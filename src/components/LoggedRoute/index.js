import { Route } from 'react-router-dom'

// Utils
import ProtectedRoute from 'components/ProtectedRoute/index.js'
import HeaderApplication from 'components/HeaderApplication/index.tsx'

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
