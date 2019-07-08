// Vendors
import { createPortal } from 'react-dom'

// Styles
import styles from './style.css'

const AppLoader = () => {
  return createPortal(
    <div className="app-loader__body">Loading</div>,
    document.querySelector('#app-loader')
  )
}

export default AppLoader
