// Vendor
import { connect } from 'react-redux'

export default WrappedComponent => {

  class ProtectedRoute extends Component {
    componentDidMount() {
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
    userIsLogged: authentication && authentication.userIsLogged
  })


  return connect(
    mapStateToProps
  )(ProtectedRoute)
}
