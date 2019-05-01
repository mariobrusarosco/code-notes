// Components
import LoginForm from 'components/Forms/LoginForm'

class Login extends Component {
  render() {
    // console.log(this)
    return (
      <div className="login ui segment">
        <LoginForm history={this.props.history} />
      </div>
    )
  }
}

export default Login
