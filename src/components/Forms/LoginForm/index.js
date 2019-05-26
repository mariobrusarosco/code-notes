// Vendors
import { Field, reduxForm } from 'redux-form'

// Components
import InputText from 'components/Forms/Inputs/InputText'
import SpinnerLoader from 'components/Spinner'

// Utils
import { isRequired } from 'utils/fieldsValidators'

class LoginForm extends Component {
  render() {
    return (
      <>
        {this.props.submitting && <SpinnerLoader />}
        <form
          className="ui form"
          onSubmit={this.props.handleSubmit(this.props.onSubmitCallback)}
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

export default wrappedForm
