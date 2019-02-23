// Enables Hot Module Replacement
if (module && module.hot) {
  module.hot.accept()
}

import React from 'react'
import { render } from 'react-dom'
import  App from './components/App'


const container = document.querySelector('#app')
render(<App />, container)
