
import { handleActions } from 'redux-actions'

const initialState = {
  userIsLogged: false
}

const authentication = handleActions({
  LOG_IN: state => ({
    userIsLogged: true
  })
}, initialState)

export default authentication
