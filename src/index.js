if (module && module.hot) {
  module.hot.accept()
}

import { render } from 'react-dom'

// Components
import App from 'components/App'

// Global Styles
import './styles.css'
console.log(`I'm the one who knocks`)

const container = document.querySelector('#app')

render(<App />, container)
