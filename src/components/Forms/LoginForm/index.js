// Vendors
import { Field, reduxForm } from 'redux-form'

// Components
import InputText from 'components/Forms/Inputs/InputText'
import SpinnerLoader from 'components/Spinner'

// Utils
import { isRequired } from 'utils/fieldsValidators'
import codeNotesAPI from 'api/code-notes'

class LoginForm extends Component {

  componentDidMount(){
    console.log('Login Form was mounted')
  }

  onSubmitCallback = async ({ email, password }) => {
    console.log('Login Form submit was triggered')

    codeNotesAPI.post('/auth', { email, password })
      .then(res => {
        alert('Your data is valid')
      })
      .catch(err => {
        alert(err)
      })
  }


  render() {

    return (
      <>
        {/* { true && <SpinnerLoader /> } */}
        <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmitCallback)}>
          <div className="field-wrapper">
            <Field
              name="email"
              component={InputText}
              label="Email"
              type="email"
              validate={[isRequired]}
            />
          </div>
          <div className="field-wrapper">
            <Field
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
