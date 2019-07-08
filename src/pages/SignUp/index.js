// Vendor
import { connect } from 'react-redux'

// Utils
import codeNotesAPI from 'api/code-notes'

// Components
import SignUpForm from 'components/Forms/SignUpForm'

const SignUp = ({ userIsLogged, history }) => {
  console.log(`userIsLogged: ${userIsLogged}`)

  const onSubmitCallback = async ({ firstname, lastname, email, password }) => {
    await codeNotesAPI
      .post('users', { firstname, lastname, email, password, authTypes: ['email'] })
      .then(res => {
        const message = res && res.data

        alert(message)
        history.push('/')
      })
      .catch(err => {
        const message = err && err.response && err.response.data

        alert(message)
      })
  }

  if (userIsLogged) {
    return null
  }

  return (
    <div className="sign-up ui segment">
      <SignUpForm history={history} onSubmitCallback={onSubmitCallback} />
    </div>
  )
}

const mapStateToProps = ({ authentication }) => ({
  userIsLogged: authentication && authentication.userIsLogged
})

export default connect(mapStateToProps)(SignUp)
