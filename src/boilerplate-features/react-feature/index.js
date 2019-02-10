import React, { Component } from 'react'
import { render } from 'react-dom'

const container = document.createElement('div')
container.setAttribute('id', 'app')

document.body.appendChild(container)

class App extends Component {
  render() {
    return (
      <div className="box">
        <h2>React Support</h2>
        <p>Made with React</p>
      </div>
    )
  }
}

render(<App />, document.querySelector('#app'))
