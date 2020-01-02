// Vendors
import { pathOr } from 'ramda'

// CONSTANTS
const { ERRORS } = APP || global.APP

const initialAppCriticalError = {
  status: false,
  error: '',
  additionalInfo: '',
  messageForUsers: ERRORS['DEFAULT']
}

const initialState = {
  appIsLoaded: false,
  appCriticalError: initialAppCriticalError
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'APP_IS_LOADED':
      return {
        ...state,
        appIsLoaded: true
      }
    case 'APP_HAS_CRITICAL_ERROR':
      const errorData = pathOr({}, ['errorData'], action)
      const previousProps = state.appCriticalError

      return {
        ...state,
        appCriticalError: {
          ...previousProps,
          status: true,
          ...errorData
        }
      }
    case 'RESET_APP_CRITICAL_ERROR':
      return {
        ...state,
        appCriticalError: initialAppCriticalError
      }

    default:
      return state
  }
}

export default appReducer
