import { handleActions } from 'redux-actions'

const initialState = {
  appIsLoaded: false,
  globalModal: {
    active: false,
    content: ''
  }
}

const appReducer = handleActions(
  {
    APP_LOADED: state => {
      return { ...state, appIsLoaded: true }
    },
    TOGGLE_MODAL: (state, { content }) => {
      const {
        globalModal: { active }
      } = state

      return {
        ...state,
        globalModal: {
          active: !active,
          content
        }
      }
    }
  },
  initialState
)

export default appReducer
