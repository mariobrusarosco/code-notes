// TO DO
// Remove 'redux' code

// Vendor
import { connect } from 'react-redux'
import cookie from 'js-cookie'
// Actions
import { logUser } from 'actions'

// Utils
import { decodeToken } from 'utils/authentication'

export default WrappedComponent => {
  class ProtectedRoute extends Component {
    constructor(props) {
      super(props)

      if (!this.authenticateUser()) {
        console.log('this route is proteced...gooing to /login')
        this.props.history.push('/login')
      }
    }

    authenticateUser = () => {
      const token = cookie('P_USER')
      const { userAllowed } = decodeToken(token)

      return userAllowed
    }

    render() {
      console.log('render: ', this.authenticateUser())
      return this.authenticateUser() ? <WrappedComponent {...this.props} /> : null
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
