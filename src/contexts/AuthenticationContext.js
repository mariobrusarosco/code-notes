// Reducer
import { AuthenticationReducer } from 'reducers/AuthenticationReducer'

import { createContext, useReducer } from 'react'

export const AuthenticationContext = createContext()

const initialState = {
  userAllowed: false
}

export const AuthContextProvider = ({ children }) => {
  const [Authentication, dispatch] = useReducer(AuthenticationReducer, initialState)

  return (
    <AuthenticationContext.Provider value={{ Authentication, dispatch }}>
      {children}
    </AuthenticationContext.Provider>
  )
}
