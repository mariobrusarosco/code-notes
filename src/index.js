// Enables Hot Module Replacement
if (module && module.hot) {
  module.hot.accept()
}

// React support
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'

// Store
import rootReducer from './redux/reducers'

const StoreEnhancer =
  process.env.NODE_ENV !== 'production'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose

const store = createStore(rootReducer, StoreEnhancer(applyMiddleware(reduxThunk)))

// SW
// import * as OfflinePluginRuntime from 'offline-plugin/runtime'
// OfflinePluginRuntime.install()

// Components
import App from 'components/App'

// App Style Global
import './styles/app.scss'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('.app')
)
