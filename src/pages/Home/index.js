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

// Components
import Cards from 'components/Cards/index.tsx'

const Home = props => {
  console.log('home props', props)
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

  // useEffect(() => {
  //   fetchNotes()
  // }, [AppDispatch])

  const mock = [
    {
      id: 1,
      language: 'css',
      description: 'align some text',
      content: 'div { text-align: center; }'
    },
    {
      id: 2,
      language: 'css',
      description: 'align some text',
      content: 'div { text-align: center; }'
    },
    {
      id: 3,
      language: 'css',
      description: 'align some text',
      content: 'div { text-align: center; }'
    },
    {
      id: 4,
      language: 'css',
      description: 'align some text',
      content: 'div { text-align: center; }'
    },
    {
      id: 1,
      language: 'css',
      description: 'align some text',
      content: 'div { text-align: center; }'
    },
    {
      id: 2,
      language: 'css',
      description: 'align some text',
      content: 'div { text-align: center; }'
    },
    {
      id: 3,
      language: 'css',
      description: 'align some text',
      content: 'div { text-align: center; }'
    },
    {
      id: 4,
      language: 'css',
      description: 'align some text',
      content: 'div { text-align: center; }'
    }
  ]

  console.log('render Home', mock)

  return (
    <div className="home">
      {/* <h2 onClick={test}>Your Notes</h2> */}
      {mock && <Cards data={mock} />}
    </div>
  )
}

export default Home
