// Enables Hot Module Replacement
if (module && module.hot) {
  module.hot.accept()
}

import React from 'react'
import  { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

import reducers from './reducers'

import App from './components/Blog Project/App'


const store = createStore(reducers)
const container = document.querySelector('#app')

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  container
)
