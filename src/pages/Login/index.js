// Vendors
import { useContext } from 'react'
import cookie from 'js-cookie'
import { withRouter } from 'react-router-dom'
import { path, pathOr } from 'ramda'

// Components
import LoginForm from 'components/Forms/LoginForm'

// Utils
import codeNotesAPI from 'api/code-notes'
import { decodeToken } from 'utils/authentication'

// Actions
import { setGlobalError } from 'actions/App'

// Context
import { AppContext } from 'contexts/AppContext'
import { AuthenticationContext } from 'contexts/Authentication'

const Login = ({ logUser }) => {
  const { dispatch } = useContext(AppContext)

  const onSubmitCallback = async ({ email, password }) => {
    try {
      await codeNotesAPI.post('/auth', { email, password })

      // Get User's token
      const token = cookie('P_U')

      // Decode User's token
      const { userAllowed, userData } = decodeToken(token)

      // Update store with user's info and go to Home
      logUser({ userAllowed, userData })

      withRouter.push('/')
    } catch (err) {
      // Network Failed Scenario ----> const message = path(['message'], err)
      console.log('catched: ', err)
      const message = pathOr(err.message, ['response', 'data'], err)

      dispatch(setGlobalError(message))
    }
  }

  return (
    <>
      <div className="login ui segment">
        <LoginForm
          // history={this.props.history}
          onSubmitCallback={onSubmitCallback}
        />
      </div>
    </>
  )
}

export default Login
