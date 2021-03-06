// Vendors
import { useContext } from 'react'
import cookie from 'js-cookie'
import { pathOr } from 'ramda'

// APP
const {
  API: { API_ROOT }
} = APP

// Components
import LoginForm from 'components/Forms/LoginForm/index.tsx'

// Utils
import codeNotesAPI from 'api/code-notes'
// import { decodeToken } from 'utils/authentication'

// Actions
// import { setGlobalError } from 'actions/App'
// import { logUser } from 'actions/Authentication'

// Context
// import { AuthenticationContext } from 'contexts/AuthenticationContext'
// import { AppContext } from 'contexts/AppContext'

const Login: React.FC = ({ history }) => {
  // const { AuthenticationDispatch } = useContext(AuthenticationContext)
  // const { AppDispatch } = useContext(AppContext)

  // const onSubmitCallback = async ({ email, password }) => {
  // try {
  //   await codeNotesAPI.post('/auth', { email, password })
  //     // Get User's token
  //     const token = cookie('P_U')
  //     // Decode User's token
  //     const { userIsLogged, userData } = decodeToken(token)
  //     // Update Authentication Context with user's info and go to Home
  //     AuthenticationDispatch(logUser({ userIsLogged, userData }))
  //     history.push('/')
  // } catch (err) {
  //     const message = pathOr(err.message, ['response', 'data'], err)
  //     AppDispatch(setGlobalError(message))
  // }
  // }

  const onGoogle = async () => {
    // window.location.href = `${API_ROOT}/auth/google`

    try {
      await codeNotesAPI.get(`${API_ROOT}/auth/google/`)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      <div className="login">
        <a onClick={onGoogle}>google</a>
      </div>
    </>
  )
}

export default Login
