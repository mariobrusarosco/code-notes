// Vendor
import { connect } from 'react-redux'

// Actions
import { logUser } from 'actions'

// Utils
import { parseUserData } from 'utils/authentication'

export default WrappedComponent => {

  class ProtectedRoute extends Component {
    constructor(props) {
      super(props)

      if (!this.props.userIsLogged) {
        this.props.history.push('/login')
      }
    }

    render() {
      return (
        (this.props.userIsLogged) ? <WrappedComponent {...this.props} /> : null
      )
    }
  }

  const mapStateToProps = ({ authentication }) => ({
    userIsLogged: authentication && authentication.userData && authentication.userData['id']
  })

  return connect(
    mapStateToProps,
    { logUser }
  )(ProtectedRoute)
}
