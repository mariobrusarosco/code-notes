// Vendor
import { connect } from 'react-redux'

// Actions
import { logUser } from 'actions'

// Utils
import { decodeToken } from 'utils/authentication'

export default WrappedComponent => {

  class ProtectedRoute extends Component {

    authenticateUser = () => {
      const { userAllowed } = decodeToken()

      return userAllowed
    }

    render() {
      console.log('render: ', this.authenticateUser())
      return (
        (this.authenticateUser()) ? <WrappedComponent {...this.props} /> : null
      )
    }
  }

  return ProtectedRoute
  // const mapStateToProps = ({ authentication }) => ({
  //   userAllowed: authentication && authentication.userAllowed
  // })

  // return connect(
  //   null,
  //   { logUser }
  // )(ProtectedRoute)
}
