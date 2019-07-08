// Vendors
import { useEffect, useContext } from 'react'
import { pathOr } from 'ramda'

// Actions
import { setGlobalError } from 'actions/App'

// Api Helpers
import codeNotesAPI from 'api/code-notes'

// Contexts
import { NotesContext } from 'contexts/NotesContext'
import { AppContext } from 'contexts/AppContext'

const Home = ({ history }) => {
  const { notesDispatch, Notes } = useContext(NotesContext)
  const { AppDispatch, App } = useContext(AppContext)

  useEffect(() => {
    async function fetchNotes() {
      console.log(App.appHasError)
      try {
        const { data: allNotes } = await codeNotesAPI.get('/notes')

        notesDispatch({
          type: 'FETCH_NOTES',
          allNotes
        })
      } catch (err) {
        const message = pathOr(err.message, ['response', 'data', 'message'], err)

        // AppDispatch(setGlobalError(message))

        // history.push('/login')
      }
    }

    fetchNotes()
  }, [App.appHasError])

  console.log('render nome')
  return (
    <div className="home">
      <h2>Your Notes</h2>
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
