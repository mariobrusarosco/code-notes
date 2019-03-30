import React, { Component } from 'react'


class GoogleAuth extends Component {
  state = { }

  componentDidMount() {
    const G_API = window && window.gapi || {}

    G_API.load('client:auth2', () => {
      G_API.client.init({
        clientId: '842158296791-jc4jo19l0rqcc4gbvvi1ceg76m46uo6t.apps.googleusercontent.com',
        scope: 'email profile'
      })
      .then(() => {
        this.auth = G_API.auth2.getAuthInstance()
        this.setState({ isSignedIn: this.auth.isSignedIn.get() })
      })
    })
  }

  renderAuthBtn() {
    if (this.state.isSignedIn === null || this.state.isSignedIn === undefined ) {
      return <div>I don't know yet</div>
    }
    else if (this.state.isSignedIn) {
      return <div className="">Signed In</div>
    }
    else {
      return <div>Not signed in</div>
    }
  }

  render() {
    return (
      this.renderAuthBtn()
    )
  }
}

export default GoogleAuth
