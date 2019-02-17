import { render } from 'react-dom'
import React from 'react'

// Components
import SeasonDisplay from '../SeasonDisplay'
import Spinner from '../Loaders/Spinner'

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

	renderContent() {
		if (!this.state.errorMessage && this.state.lat) {
			return <SeasonDisplay lat={this.state.lat} />
		}

		if (this.state.errorMessage) {
			return <div className="main">Error: {this.state.errorMessage}</div>
		}

		if (!this.state.errorMessage && !this.state.lat) {
			return (
				<Spinner
					message='Please Accept location request'
				/>
			)
		}
	}

  render() {
		console.log('render()')
		return this.renderContent()
	}
}

const container = document.querySelector('#app')
console.log(container)

render(<App />, container)
