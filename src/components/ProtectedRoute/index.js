// Vendor
import cookie from 'js-cookie'
import { useEffect, useState } from 'react'

// Utils
import { decodeToken } from 'utils/authentication'

const ProtectedRoute = WrappedComponent => {
  return props => {
    const initializeState = () => {
      const token = cookie('P_U')
      const { userIsLogged } = decodeToken(token)

      return userIsLogged
    }

    const [userIsLogged, setuserIsLogged] = useState(initializeState)

    useEffect(() => {
      if (!userIsLogged) {
        props.history.push('/login')
      }
    }, [])

    return userIsLogged ? <WrappedComponent {...props} /> : null
  }
}

export default ProtectedRoute
