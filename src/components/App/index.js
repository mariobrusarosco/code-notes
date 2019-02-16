import { render } from 'react-dom'
import React from 'react'
import SeasonDisplay from '../SeasonDisplay'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			lat: null,
			errorMessage: null
		}
	}

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      error => this.setState({ errorMessage: error.message })
    )
  }

  componentDidUpdate() {
    console.log('componentDidUpdate()')
  }

  render() {
    console.log('render()')
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />
    }

    if (this.state.errorMessage) {
      return <div className="main">Error: {this.state.errorMessage}</div>
    }

    if (!this.state.errorMessage && !this.state.lat) {
      return <div className="main">Loading</div>
    }
  }
}

const container = document.querySelector('#app')
console.log(container)

render(<App />, container)
