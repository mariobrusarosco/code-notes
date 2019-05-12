import { handleActions } from 'redux-actions'

const initialState = {
  appIsLoaded: false
}

const appReducer = handleActions(
  {
    APP_LOADED: state => {
      return { ...state, appIsLoaded: true }
    }
  },
  initialState
)

export default appReducer
