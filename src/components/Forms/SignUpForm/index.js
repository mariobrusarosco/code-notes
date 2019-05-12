// Vendors
import { Field, reduxForm } from 'redux-form'
import axios from 'axios'

// Components
import InputText from 'components/Forms/Inputs/InputText'
import SpinnerLoader from 'components/Loaders/Spinner'

// Utils
import { isRequired } from 'utils/fieldsValidators'
import codeNotesAPI from 'api/code-notes'

const SignUpForm = ({ submitting, pristine, handleSubmit: reduxSubmit }) => {
  const onSubmitCallback = async ({ firstname, lastname, email, password }) => {
    await codeNotesAPI
      .post(
        'users',
        // 'http://localhost:9090/api/v1/users',
        { firstname, lastname, email, password, authTypes: ['email'] }
      )
      .then(res => alert('Success'))
      .catch(err => {
        alert(err)
      })
  }

  return (
    <>
      {/* { true && <SpinnerLoader /> } */}
      <form className="ui form" onSubmit={reduxSubmit(onSubmitCallback)}>
        {submitting && <span>!!!!addasd{pristine}</span>}

        <div className="field-wrapper">
          <Field
            elemTag="signup-firstname"
            name="firstname"
            component={InputText}
            label="Type your first name here"
            type="text"
            validate={[isRequired]}
          />
        </div>
        <div className="field-wrapper">
          <Field
            elemTag="signup-lastname"
            name="lastname"
            component={InputText}
            label="Type your last name here"
            type="text"
            validate={[isRequired]}
          />
        </div>
        <div className="field-wrapper">
          <Field
            elemTag="signup-email"
            name="email"
            component={InputText}
            label="Type an email here"
            type="email"
            validate={[isRequired]}
          />
        </div>
        <div className="field-wrapper">
          <Field
            elemTag="signup-password"
            name="password"
            component={InputText}
            label="Type a password here"
            type="password"
            validate={[isRequired]}
          />
        </div>
        <div className="field-wrapper">
          <button
            data-tag="signup-submit-btn"
            disabled={submitting || pristine}
            className="ui button primary"
          >
            Sign Up
          </button>
        </div>
      </form>
    </>
  )
}

export default reduxForm({
  form: 'SignUpForm'
})(SignUpForm)
