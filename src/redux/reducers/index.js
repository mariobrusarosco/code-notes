import { combineReducers } from 'redux'

// Reducers
import appReducer from './app'
import exampleReducer from './example'
import lightboxReducer from './lightbox'

const rootReducer = combineReducers({
  app: appReducer,
  example: exampleReducer,
  lightbox: lightboxReducer
})

export default rootReducer
