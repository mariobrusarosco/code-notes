// Reducer
import { AuthenticationReducer } from 'reducers/AuthenticationReducer'

import { createContext, useReducer } from 'react'

export const AuthenticationContext = createContext()

const initialState = {
  userIsLogged: false
}

export const AuthContextProvider = ({ children }) => {
  const [Authentication, AuthenticationDispatch] = useReducer(
    AuthenticationReducer,
    initialState
  )

  return (
    <AuthenticationContext.Provider value={{ Authentication, AuthenticationDispatch }}>
      {children}
    </AuthenticationContext.Provider>
  )
}
