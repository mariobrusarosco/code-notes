// Enables Hot Module Replacement
if (module && module.hot) {
  module.hot.accept()
}

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import  App from './components/Video Project/App'
import reducers from './reducers'

const store = createStore(reducers)
const container = document.querySelector('#app')

render(
  <Provider store={store} >
    <App />,
  </Provider>,
  container
)
