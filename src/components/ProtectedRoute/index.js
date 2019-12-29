// Vendor
import cookie from 'js-cookie'
import { useEffect, useState } from 'react'

// App History
import history from 'utils/app-history'
import ROUTES from 'routes'
// Utils
import { decodeToken } from 'utils/authentication'

const ProtectedRoute = ({ children, ...props }) => {
  console.log('[ -----   PROTECTED ROUTE --------]', children, props, ROUTES)
  const userIsLogged = true

  if (!userIsLogged) {
    history.push(ROUTES.LOGIN)

    return null
  }

  return children
}

export default ProtectedRoute
