// Vendor
import cookie from 'js-cookie'
import { useEffect, useState } from 'react'

// Utils
import { decodeToken } from 'utils/authentication'

const ProtectedRoute = WrappedComponent => {
  return ({ history }) => {
    const initializeState = () => {
      const token = cookie('P_U')
      const { userIsLogged } = decodeToken(token)

      return userIsLogged
    }

    const [userIsLogged, setuserIsLogged] = useState(initializeState)

    useEffect(() => {
      if (!userIsLogged) {
        history.push('/login')
      }
    }, [])

    return userIsLogged ? <WrappedComponent /> : null
  }
}

export default ProtectedRoute
