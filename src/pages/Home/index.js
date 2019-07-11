// Vendors
import { useEffect, useContext, useState } from 'react'
import { pathOr } from 'ramda'

// Actions
import { setGlobalError } from 'actions/App'
import { logUser } from 'actions/Authentication'

// Api Helpers
import codeNotesAPI from 'api/code-notes'

// Contexts
import { NotesContext } from 'contexts/NotesContext'
import { AppContext } from 'contexts/AppContext'
import { AuthenticationContext } from 'contexts/AuthenticationContext'

const Home = ({ history }) => {
  // Contexts
  const { notesDispatch, Notes } = useContext(NotesContext)
  const { AppDispatch } = useContext(AppContext)
  // const { AuthenticationDispatch } = useContext(AuthenticationContext)

  // States
  // const [fetchFailed, setFetchStatus] = useState(false)

  async function fetchNotes() {
    try {
      const { data: allNotes } = await codeNotesAPI.get('/notes')

      notesDispatch({ type: 'FETCH_NOTES', allNotes: [{ a: 1 }] })
    } catch (err) {
      const message = pathOr(err.message, ['response', 'data', 'message'], err)

      AppDispatch({
        type: 'SET_GLOBAL_ERROR',
        errorContent: message
      })
    }
  }

  useEffect(() => {
    fetchNotes()
  }, [AppDispatch])

  console.log('render nome')

  return (
    <div className="home">
      {/* <h2 onClick={test}>Your Notes</h2> */}
      {Notes && (
        <ul className="list">
          {Notes.map(note => {
            return (
              <li className="item" key={note._id}>
                <img className="ui avatar image" alt={note.language} />
                <div className="content">
                  <div className="description">{note.description}</div>
                </div>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default Home
