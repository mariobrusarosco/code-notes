import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

// Reducers
// import preferencesReducer from './preferences'
import authenticationReducer from './authentication'
import appReducer from './app'

const reducers = combineReducers({
  app: appReducer,
  authentication: authenticationReducer,
  form: formReducer
  // prefe
})

export default reducers
