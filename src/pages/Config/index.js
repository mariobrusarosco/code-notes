// Vendor
import { connect } from 'react-redux'
import cookie from 'js-cookie'

// Components
import ConfigEditForm from 'components/Forms/ConfigEditForm'

// Actions
import { logUser } from 'actions'

// Utils
import codeNotesAPI from 'api/code-notes'
import { decodeToken } from 'utils/authentication'

class Config extends Component {
  onSubmitCallback = async data => {
    try {
      const { id, firstname } = data
      /*
       * Calling the API with the new User's values.
       * The User's new data will be inside a cookie, named USER_COOKIE_NAME in the App Configuration
       */
      const response = await codeNotesAPI.patch(`/users/${id}`, {
        firstname
      })

      // TODO -- DRY
      // Retrieving User's Cookie
      const token = cookie('P_U')
      const { userIsLogged, userData } = decodeToken(token)

      if (userIsLogged) {
        this.props.logUser({ userIsLogged, userData })
      } else {
        console.log('no token')
      }
      // TODO -- DRY

      alert('Updated Data')
    } catch (err) {
      const { name, message } = err && err.response && err.response.data

      alert(message)

      if (name === 'TokenExpiredError') {
        this.props.history.push('/login')
      }
    }
  }

  render() {
    return (
      <div className="config ui segment">
        <ConfigEditForm onSubmitCallback={this.onSubmitCallback} />
      </div>
    )
  }
}

export default connect(
  null,
  { logUser }
)(Config)
