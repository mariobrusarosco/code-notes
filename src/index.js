// Enables Hot Module Replacement
if (module && module.hot) {
  module.hot.accept()
}

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
// Reducers
import reducers from './reducers'

// Store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware())
)

import App from './components/App'
import StreamApp from './components/Stream Project/App'
import VideoApp from './components/Video Project/App'


ReactDOM.render(
  <Provider store={store}>
    {/* <App />, */}
    <StreamApp />,
  </Provider>,
  document.querySelector('#app')
)
