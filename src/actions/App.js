// Api Helpers
import codeNotesAPI from 'api/code-notes'

export const setGlobalError = errorContent => {
  return {
    type: 'SET_GLOBAL_ERROR',
    errorContent
  }
}

export const resetGlobalError = () => {
  return {
    type: 'RESET_GLOBAL_ERROR'
  }
}

export const setAppAsLoaded = () => {
  return {
    type: 'APP_IS_LOADED'
  }
}

export const fetchNotes = () => async dispatch => {
  try {
    const { data: allNotes } = await codeNotesAPI.get('/notes')

    return dispatch({
      type: 'FETCH_NOTES',
      allNotes
    })
  } catch (e) {
    console.error('error loading notes ----> ', e)
  }
}
