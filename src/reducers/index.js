import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

// Reducers
import authenticationReducer from './authentication'
import appReducer from './app'

const reducers = combineReducers({
  app: appReducer,
  authentication: authenticationReducer,
  form: formReducer
})

export default reducers
