// Enables Hot Module Replacement
if (module && module.hot) {
  module.hot.accept()
}

import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'

// Reducers
// import reducers from './reducers'

// Store
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)))

// Components
import GlobalStyles from 'components/GlobalStyles/index.tsx' // TODO index.tsx temp approach
// import './styles/reset.scss'
// import './styles/variables.scss'
// import './styles/app.scss'

// Components
import App from './components/App'
import Toast from 'components/Toast'

// Providers
import { AppProvider } from 'contexts/AppContext'
import { AuthenticationProvider } from 'contexts/AuthenticationContext'
import { NotesProvider } from 'contexts/NotesContext'

ReactDOM.render(
  <>
    <GlobalStyles />
    {/* <Provider store={store}> */}
    <AppProvider>
      <AuthenticationProvider>
        <NotesProvider>
          <App />
          <Toast />
        </NotesProvider>
      </AuthenticationProvider>
    </AppProvider>
    {/* </Provider>, */}
  </>,
  document.querySelector('#app')
)
