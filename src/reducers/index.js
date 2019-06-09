import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

// Reducers
import appReducer from './app'
import authenticationReducer from './authentication'
import editorReducer from './editor'

const reducers = combineReducers({
  app: appReducer,
  authentication: authenticationReducer,
  form: formReducer,
  editor: editorReducer
})

export default reducers
