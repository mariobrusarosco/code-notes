// Vendor
import { connect } from 'react-redux'

// Components
import SignUpForm from 'components/Forms/SignUpForm'

const SignUp = ({ userIsLogged }) => {
  if (userIsLogged) {
    return null
  }

  return (
    <div className="sign-up ui segment">
      <SignUpForm />
    </div>
  )
}

const mapStateToProps = ({ authentication }) => ({
  userIsLogged: authentication && authentication.userIsLogged
})

export default connect(mapStateToProps)(SignUp)
