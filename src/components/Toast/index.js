// Styles
import styles from './styles.scss'

// Context
import AppContext from 'contexts/AppContext'

const Toast = () => {
  const { appHasError, errorContent } = React.useContext(AppContext)

  if (!appHasError) return null

  return (
    <div className={styles.Toast}>
      This is a message
      <p>{errorContent}</p>
    </div>
  )
}

export default Toast
