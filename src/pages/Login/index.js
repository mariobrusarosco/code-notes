// Vendors
import { connect } from 'react-redux'
import cookie from 'js-cookie'

// Components
import LoginForm from 'components/Forms/LoginForm'
import Modal from 'components/Modal'
import DefaultError from 'components/Errors/Default'

// Utils
import codeNotesAPI from 'api/code-notes'
import { decodeToken } from 'utils/authentication'

// Actions
import { loadUserData, logUser, toggleModal } from 'actions'

class Login extends Component {
  onSubmitCallback = async ({ email, password }) => {
    try {
      await codeNotesAPI.post('/auth', { email, password })

      // Get User's token
      const token = cookie('P_U')

      // Decode User's token
      const { userAllowed, userData } = decodeToken(token)

      // Update store with user's info and go to Home
      this.props.logUser({ userAllowed, userData })
      this.props.history.push('/')
    } catch (err) {
      const message = err && err.response && err.response.data

      this.props.toggleModal({
        content: <DefaultError markup={message} />
      })
      // alert(message)
    }
  }

  render() {
    return (
      <>
        <div className="login ui segment">
          <LoginForm
            history={this.props.history}
            onSubmitCallback={this.onSubmitCallback}
          />
        </div>
        {this.props.globalModal.active && <Modal history={this.props.history} />}
      </>
    )
  }
}

const mapStateToProps = ({ app }) => {
  return {
    globalModal: app.globalModal
  }
}

export default connect(
  mapStateToProps,
  { loadUserData, logUser, toggleModal }
)(Login)
