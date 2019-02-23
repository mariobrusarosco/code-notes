import React from 'react'

// Components
import SearchBar from '../SearchBar'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
		}
  }

  onSearchSubmit = term => {
    console.log(term)
  }

  componentDidMount() {

  }

  componentDidUpdate() {
    console.log('componentDidUpdate()')
  }

	renderContent() {
		return (
			<div className="ui container">
				<SearchBar onSubmitHandler={this.onSearchSubmit} />
			</div>
		)
	}

  render() {
		console.log('render()')
		return this.renderContent()
	}
}

export default App
