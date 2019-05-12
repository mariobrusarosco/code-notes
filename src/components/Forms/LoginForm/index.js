// Vendors
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

// Components
import InputText from 'components/Forms/Inputs/InputText'
import SpinnerLoader from 'components/Loaders/Spinner'

// Utils
import { isRequired } from 'utils/fieldsValidators'
import codeNotesAPI from 'api/code-notes'
import { decodeToken } from 'utils/authentication'

// Actoins
import { loadUserData, logUser } from 'actions'

class LoginForm extends Component {
  onSubmitCallback = async ({ email, password }) => {
    // TO DO async/awati aproach
    codeNotesAPI
      .post('/auth', { email, password })
      .then(res => {
        // Set User's token
        localStorage.setItem('UID', res.headers['uid'])

        const { userAllowed, userData } = decodeToken()

        this.props.logUser({ userAllowed, userData })
        this.props.history.push('/')
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <>
        {this.props.submitting && <SpinnerLoader />}
        <form
          className="ui form"
          onSubmit={this.props.handleSubmit(this.onSubmitCallback)}
        >
          <div className="field-wrapper">
            <Field
              elemTag="login-email"
              name="email"
              component={InputText}
              label="Email"
              type="email"
              validate={[isRequired]}
            />
          </div>
          <div className="field-wrapper">
            <Field
              elemTag="login-password"
              name="password"
              component={InputText}
              label="Password"
              type="password"
              validate={[isRequired]}
            />
          </div>
          <div className="field-wrapper">
            <button
              data-tag="login-submit-btn"
              disabled={this.props.submitting || this.props.pristine}
              className="ui button primary"
            >
              Log In
            </button>
          </div>
        </form>
      </>
    )
  }
}

const wrappedForm = reduxForm({
  form: 'login'
})(LoginForm)

export default connect(
  null,
  { loadUserData, logUser }
)(wrappedForm)
