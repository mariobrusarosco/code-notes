// Reducer
import { NotesReducer } from 'reducers/NotesReducer'

import { createContext, useReducer } from 'react'

export const NotesContext = createContext()

const initialState = []

export const NotesProvider = ({ children }) => {
  const [Notes, notesDispatch] = useReducer(NotesReducer, initialState)

  return (
    <NotesContext.Provider value={{ Notes, notesDispatch }}>
      {children}
    </NotesContext.Provider>
  )
}
