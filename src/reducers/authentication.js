
import { handleActions } from 'redux-actions'

const initialState = {
  userIsLogged: false
}

const authentication = handleActions({
  LOG_IN: (state, { payload }) => ({
    userData: payload,
  })
}, initialState)

export default authentication
