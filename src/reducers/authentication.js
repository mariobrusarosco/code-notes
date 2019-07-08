import { handleActions } from 'redux-actions'

const initialState = {
  userIsLogged: false
}

const authentication = handleActions(
  {
    LOG_IN: (state, { payload: { userIsLogged, userData } }) => ({
      userIsLogged,
      userData
    })
  },
  initialState
)

export default authentication
