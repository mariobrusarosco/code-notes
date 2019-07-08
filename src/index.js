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

// Global Styles
import './styles/reset.css'
import './styles/variables.css'
import './styles/app.css'

// Components
import App from './components/App'
import Toast from 'components/Toast'

// Providers
import { AppContextProvider } from 'contexts/AppContext'
import { AuthContextProvider } from 'contexts/AuthenticationContext'

ReactDOM.render(
  <Provider store={store}>
    <AppContextProvider>
      <AuthContextProvider>
        <App />
        <Toast />
      </AuthContextProvider>
    </AppContextProvider>
  </Provider>,
  document.querySelector('#app')
)
