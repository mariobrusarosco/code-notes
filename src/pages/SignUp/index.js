// Vendor
import { connect } from 'react-redux'

// Utils
import codeNotesAPI from 'api/code-notes'

// Components
import SignUpForm from 'components/Forms/SignUpForm'

const SignUp = ({ userAllowed, history }) => {
  console.log(`userAllowed: ${userAllowed}`)

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

  if (userAllowed) {
    return null
  }

  return (
    <div className="sign-up ui segment">
      <SignUpForm history={history} onSubmitCallback={onSubmitCallback} />
    </div>
  )
}

const mapStateToProps = ({ authentication }) => ({
  userAllowed: authentication && authentication.userAllowed
})

export default connect(mapStateToProps)(SignUp)
