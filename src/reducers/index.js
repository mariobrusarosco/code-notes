import { combineReducers } from 'redux'
import { reducer as formReducer} from 'redux-form'

// Reducers
import authenticationReducer from './authentication'

const reducers = combineReducers({
  form: formReducer,
  authentication: authenticationReducer
})

export default reducers
