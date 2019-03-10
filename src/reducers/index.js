import { combineReducers } from 'redux'

import blogReducer from './blog-reducer'
import usersReducer from './users-reducer'

const reducers = combineReducers({
  blog: blogReducer,
  users: usersReducer,
})

export default reducers
