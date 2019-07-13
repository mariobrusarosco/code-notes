// Vendor
import cookie from 'js-cookie'
import { useEffect, useState } from 'react'

// Utils
import { decodeToken } from 'utils/authentication'

const ProtectedRoute = ({ Page, ...props }) => {
  const token = cookie('P_U')
  const { userIsLogged } = decodeToken(token)

  useEffect(() => {
    if (!userIsLogged) {
      props.history.push('/login')
    }
  }, [])

  return userIsLogged ? <Page {...props} /> : null
}

export default ProtectedRoute
