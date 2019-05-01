
import { handleActions } from 'redux-actions'

const initialState = {
  userAllowed: false
}

const authentication = handleActions({
  LOG_IN: (state, { payload: { userAllowed, userData } }) => ({
    userAllowed,
    userData,
  })
}, initialState)

export default authentication
