// Enables Hot Module Replacement
if (module && module.hot) {
  module.hot.accept()
}

import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'

// Reducers
import reducers from './reducers'

// Store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)))

// Components
import App from './components/App'
import Toast from 'components/Toast'

ReactDOM.render(
  <Provider store={store}>
    <App />
    <Toast />
  </Provider>,
  document.querySelector('#app')
)
