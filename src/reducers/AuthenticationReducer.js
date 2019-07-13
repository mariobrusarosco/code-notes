import { path } from 'ramda'

export const AuthenticationReducer = (state, action) => {
  const actionType = path(['type'], action)

  switch (actionType) {
    case 'LOG_IN':
      const { userIsLogged, userData } = path(['payload'], action)

      return {
        ...state,
        userIsLogged,
        userData
      }
    default:
      return state
  }
}
