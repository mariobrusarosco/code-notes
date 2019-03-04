// @NOTE
// EXAMPLES TO BE NOTED!!!!
import React from 'react'

class SearchBar extends React.Component {

  state = {
    term: ''
  }

  handleFormSubmit = e => {
    e.preventDefault()

    this.props.onSubmitHandler(this.state.term)
  }

  handleInputChange = e => {
    this.setState({
      term: e.target.value
    })
  }

  render () {
		return (
			<div className="ui segment">
				<form action="" className="ui form" onSubmit={this.handleFormSubmit}>
					<div className="field">
						<label htmlFor="">Image Search</label>
						<input type="text" onChange={this.handleInputChange} />
					</div>
				</form>
			</div>
		)
	}
}
// @NOTE
  // 'this' on react - Mode 1
  /*
    constructor(props) {
      super(props)

      this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange(e){
    this.setState({
      term: e.target.value
    })
  }
  */
  // 'this' on react - Mode 2
  /*
    state = {
     term: ''
    }
    handleInputChange = (e) => {
      this.setState({
        term: e.target.value
      })
    }
  */

  // @NOTE
  // CONTROLLED COMPONENTS
  // cONTROL AN INPUT IS TO BIND ITS 'value' attribute
  // to a React's State Property... any property
  // The point of doing this is that we don't have to access the DOM input to get its value.. we don't want to access the DOM.. we only access the Component's State
  /*

    Input -> <input type="text" onChange={this.handleInputChange} />
    State ->  this.state = {
			term: ''
		}
    Function -> handlerInput(e) {
      this.setState{
        term: e.target.value
      }
    }
  */

export default SearchBar
