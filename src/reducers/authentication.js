
import { handleActions } from 'redux-actions'

const initialState = {
  userIsLogged: false
}

const authentication = handleActions({
  LOG_IN: () => ({
    userIsLogged: true
  }),
  LOAD_USER_DATA: (state, { payload }) => ({
    ...state, user: payload
  })
}, initialState)

export default authentication
