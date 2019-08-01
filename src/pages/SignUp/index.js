// Vendor
import { connect } from 'react-redux'

// Config
const { API } = APP
const { API_ROOT } = API

// Utils
import codeNotesAPI from 'api/code-notes'

// Components
import SignUpForm from 'components/Forms/SignUpForm'

const SignUp = () => {
  // console.log(`userIsLogged: ${userIsLogged}`)

  // const onSubmitCallback = async ({ firstname, lastname, email, password }) => {
  //   await codeNotesAPI
  //     .post('users', { firstname, lastname, email, password, authTypes: ['email'] })
  //     .then(res => {
  //       const message = res && res.data

  //       alert(message)
  //       history.push('/')
  //     })
  //     .catch(err => {
  //       const message = err && err.response && err.response.data

  //       alert(message)
  //     })
  // }

  // if (userIsLogged) {
  //   return null
  // }
  const handleGoogleOAuth = () => {
    window.location.href = `${API_ROOT}/auth/google`
  }

  return (
    <div className="sign-up">
      <button onClick={handleGoogleOAuth}>Sign Up with Google</button>
      {/* <SignUpForm history={history} onSubmitCallback={onSubmitCallback} /> */}
    </div>
  )
}

export default SignUp
// const mapStateToProps = ({ authentication }) => ({
//   userIsLogged: authentication && authentication.userIsLogged
// })

// export default connect(mapStateToProps)(SignUp)
