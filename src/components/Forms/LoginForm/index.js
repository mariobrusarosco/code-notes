// Vendors
import { Field, reduxForm } from 'redux-form'

// Components
import InputText from 'components/Forms/Inputs/InputText'
import SpinnerLoader from 'components/Spinner'

// Utils
import { isRequired } from 'utils/fieldsValidators'
import codeNotesAPI from 'api/code-notes'

class LoginForm extends Component {

  onSubmitCallback = async ({ email, password }) => {
    // TO DO async/awati aproach
    // debugger
    console.log(document.cookie)
    codeNotesAPI.post('/auth', { email, password })
      .then(res => {
        localStorage.setItem('app-token', res.data)
        this.props.history.push('/')
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {

    return (
      <>
        { this.props.submitting && <SpinnerLoader /> }
        <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmitCallback)}>
          <div className="field-wrapper">
            <Field
              data-id="login-email"
              name="email"
              component={InputText}
              label="Email"
              type="email"
              validate={[isRequired]}
            />
          </div>
          <div className="field-wrapper">
            <Field
              data-id="login-password"
              name="password"
              component={InputText}
              label="Password"
              type="password"
              validate={[isRequired]}
            />
          </div>
          <div className="field-wrapper">
            <button
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

export default reduxForm({
  form: 'login'
})(LoginForm)
