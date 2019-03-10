// Enables Hot Module Replacement
if (module && module.hot) {
  module.hot.accept()
}

import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/Blog Project/App'

ReactDOM.render(
  <App />,
  document.querySelector('#app')
)
