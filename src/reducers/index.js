import { combineReducers } from 'redux'

import blogReducer from './blog-reducer'
import usersReducer from './users-reducer'

import { reducer as formReducer} from 'redux-form'


const reducers = combineReducers({
  blog: blogReducer,
  users: usersReducer,
  form: formReducer
})

export default reducers
