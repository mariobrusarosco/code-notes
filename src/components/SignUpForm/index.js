import { Field, reduxForm } from 'redux-form'

import InputText from 'components/Forms/Inputs/InputText'

const SignUpForm = ({
  handleSubmit: reduxSubmit
}) => {
  const onSubmitCallback = formValues => {
    console.log(formValues)
  }

  return (
    <form className="ui form" onSubmit={reduxSubmit(onSubmitCallback)}>
      <div className="field-wrapper">
        <Field
          name="email"
          component={InputText}
          label="Type an email here"
          type="text"
        />
      </div>
      <div className="field-wrapper">
        <Field
          name="password"
          component={InputText}
          label="Type a password here"
          type="password"
        />
      </div>
      <div className="field-wrapper">
        <button onClick={() => null} >Sign Up</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'signUp'
})(SignUpForm)
