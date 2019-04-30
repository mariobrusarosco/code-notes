// Components
import LoginForm from 'components/Forms/LoginForm'

const Login = ({ history }) => {

  return (
    <div className="login ui segment">
      <LoginForm history={history} />
    </div>
  )

}

export default Login
