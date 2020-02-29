// Vendors
import { Field, reduxForm } from 'redux-form'
import { useForm } from 'react-hook-form'

// Components
import InputText from 'components/Forms/Inputs/InputText'
import SpinnerLoader from 'components/Loaders/Spinner'

// Utils
import { isRequired } from 'utils/fieldsValidators'

// const wrappedForm = reduxForm({
//   form: 'login'
// })(LoginForm)

class Test {
  color: string = 'red'
}
interface LoginFormData {
  email: string
  password: string
}

const LoginForm = () => {
  const { register, handleSubmit, watch, errors } = useForm()

  const onSubmit = (data: LoginFormData) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <span>email</span>
        <input type="email" name="email" ref={register} />
      </label>
      <label>
        <span>password</span>
        <input type="password" name="password" ref={register} />
      </label>

      <div>
        <input type="submit" />
      </div>
    </form>
  )
}

export default LoginForm
