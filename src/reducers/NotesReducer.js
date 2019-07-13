import { path } from 'ramda'

export const NotesReducer = (state, action) => {
  const actionType = path(['type'], action)

  switch (actionType) {
    case 'FETCH_NOTES':
      const allNotes = path(['allNotes'], action)

      return [...allNotes]
    default:
      return state
  }
}
