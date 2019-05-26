// Vendors
import { connect } from 'react-redux'

// Components
import LoginForm from 'components/Forms/LoginForm'

// Utils
import codeNotesAPI from 'api/code-notes'
import { decodeToken } from 'utils/authentication'

// Actions
import { loadUserData, logUser } from 'actions'

class Login extends Component {
  onSubmitCallback = async ({ email, password }) => {
    try {
      const response = await codeNotesAPI.post('/auth', { email, password })
      // Set User's token
      localStorage.setItem('UID', response.headers['uid'])
      // Decode User's token
      const { userAllowed, userData } = decodeToken()
      // Update store with user's info and go to Home
      this.props.logUser({ userAllowed, userData })
      this.props.history.push('/')
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <div className="login ui segment">
        <LoginForm
          history={this.props.history}
          onSubmitCallback={this.onSubmitCallback}
        />
      </div>
    )
  }
}

export default connect(
  null,
  { loadUserData, logUser }
)(Login)
