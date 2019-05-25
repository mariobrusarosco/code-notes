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

      const { userAllowed, userData } = decodeToken()

      this.props.logUser({ userAllowed, userData })
      this.props.history.push('/')
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    // console.log(this)
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
