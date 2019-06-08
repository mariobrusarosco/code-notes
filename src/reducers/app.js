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
    },
    EDITOR_CONSTRUCTOR_LOADED: state => {
      return { ...state, editorConstructorIsLoaded: true }
    },
    EDITOR_THEME_LOADED: state => {
      return { ...state, editorThemeIsLoaded: true }
    }
  },
  initialState
)

export default appReducer
