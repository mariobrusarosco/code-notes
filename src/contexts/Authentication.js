import { createContext, useReducer } from 'react'

const Context = createContext()

export const initialState = {
  userAllowed: false
}

// Reducer
import { AuthReducer } from 'reducers/Authentication'

const AuthenticationProvider = ({ children }) => {
  const [Auth, dispatch] = useReducer(AuthReducer, initialState)

  return <Context.Provider value={{ Auth, dispatch }}>{children}</Context.Provider>
}

export default AuthenticationProvider
