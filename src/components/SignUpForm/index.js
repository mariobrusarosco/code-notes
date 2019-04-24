import { Field, reduxForm } from 'redux-form'
import axios from 'axios'
// Components
import InputText from 'components/Forms/Inputs/InputText'

// Utils
import codeNotesAPI from '../../api/code-notes'

const isRequired = value => {
  // console.log(value, !!value)
  return !!value ? undefined : 'This Field is required'
}

const SignUpForm = ({
  handleSubmit: reduxSubmit
}) => {
  const onSubmitCallback = ({ firstname, lastname, email, password }) => {

    axios.post(
      'https://dev-code-notes.herokuapp.com/api/v1/users',
      { firstname, lastname, email, password, authTypes: ['email'] },
    )
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  return (
    <form className="ui form" onSubmit={reduxSubmit(onSubmitCallback)}>
      <div className="field-wrapper">
        <Field
          name="firstname"
          component={InputText}
          label="Type your first name here"
          type="text"
          validate={[isRequired]}
        />
      </div>
      <div className="field-wrapper">
        <Field
          name="lastname"
          component={InputText}
          label="Type your last name here"
          type="text"
          validate={[isRequired]}
        />
      </div>
      <div className="field-wrapper">
        <Field
          name="email"
          component={InputText}
          label="Type an email here"
          type="text"
          validate={[isRequired]}
        />
      </div>
      <div className="field-wrapper">
        <Field
          name="password"
          component={InputText}
          label="Type a password here"
          type="password"
          validate={[isRequired]}
        />
      </div>
      <div className="field-wrapper">
        <button className="ui button primary">Sign Up</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'signUpForm'
})(SignUpForm)
