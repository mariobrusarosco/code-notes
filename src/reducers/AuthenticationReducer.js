import { path } from 'ramda'

export const AuthenticationReducer = (state, action) => {
  const actionType = path(['type'], action)

  switch (actionType) {
    case 'LOG_IN':
      const { userAllowed, userData } = path(['payload'], action)

      return {
        ...state,
        userAllowed,
        userData
      }
    default:
      return state
  }
}
