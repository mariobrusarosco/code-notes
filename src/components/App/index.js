import { render } from 'react-dom'
// import { Component } from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      lat: null,
      errorMessage: null
    }

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          lat: position.coords.latitude
        })
      },
      error => {
        this.setState({ errorMessage: error.message })
      }
    )
  }

  render() {
    if (!this.state.errorMessage && this.state.lat) {
      return <div className="main">Your Latitude: {this.state.lat}</div>
    }

    if (this.state.errorMessage) {
      return <div className="main">Error: {this.state.errorMessage}</div>
    }

    if (!this.state.errorMessage && !this.state.lat) {
      return <div className="main">Loading</div>
    }
  }
}

const container = document.querySelector('.app')

render(<App />, container)
