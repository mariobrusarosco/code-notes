import React, { Component } from 'react'
import { connect } from 'react-redux'

// Action
import { fetchUser } from '../../actions'

class UserHeader extends Component {

  render() {
    const { user } = this.props

    if (!user) {
      return null
    }

    return (
      <div className="dsadas">
        {user.name}
      </div>
    )
  }
}

const mapStateToPros = (state, ownProps) => {
  return { user: state.users.find(user => user.id === ownProps.userId) }
}

export default connect(
  mapStateToPros,
)(UserHeader)
