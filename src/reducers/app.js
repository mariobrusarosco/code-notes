import { handleActions } from 'redux-actions'

const initialState = {
  appIsLoaded: false,
  globalModal: {
    active: false,
    content: ''
  },
  notes: []
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
    FETCH_NOTES: (state, { allNotes }) => {
      return { ...state, notes: allNotes }
    }
  },
  initialState
)

export default appReducer
