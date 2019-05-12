import { handleActions } from 'redux-actions'

const initialState = {
  appIsLoading: true
}
const appReducer = () =>
  handleActions(
    {
      APP
    },
    initialState
  )

export default appReducer
