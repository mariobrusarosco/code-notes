import React from 'react'
import unsplashAxios from '../../api/unsplash'
// Components
import SearchBar from '../SearchBar'
import ImageList from '../ImageList'

class App extends React.Component {
	// constructor(props) {
  //   super(props)
  //   console.log(this)
  //   this.onSearchSubmit = this.onSearchSubmit.bind(this)
	// // // 	this.state = {}
  // }

  state = {
    images: []
  }

  onSearchSubmit = async term => {
    const response = await unsplashAxios.get('/search/photos', {
      params: {
        query: term
      },
    })

    this.setState({ images: response.data.results })
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
        <ImageList images={this.state.images} />
			</div>
		)
	}

  render() {
		console.log('render()')
		return this.renderContent()
	}
}

export default App
