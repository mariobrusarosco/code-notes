// React Hot Loader
import { hot } from 'react-hot-loader'
// Components
import AppRouter from 'components/AppRouter'

// Utils
import lazyload from 'utils/lazyload'

lazyload()

const App = () => {
  return <AppRouter />
}

export default hot(module)(App)
