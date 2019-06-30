import { useState } from 'react'
// Styles
import styles from './styles.scss'

// Context
import { AppContext2 } from 'contexts/AppContext'

const Toast = () => {
  const [isVisible, hideToast] = useState(false)

  return (
    <AppContext.Consumer>
      {context => {
        const { appHasError, errorContent } = context

        if (!appHasError) return null

        return (
          <div className={styles.Toast}>
            This is a message
            <p>{errorContent}</p>
            <button onClick={hideToast}>x</button>
          </div>
        )
      }}
    </AppContext.Consumer>
  )
}

export class Toast2 extends Component {
  static contextType = AppContext2

  render() {
    const { appHasError, errorContent } = this.context

    if (!appHasError) return null

    return (
      <div className={styles.Toast}>
        This is a message
        <p>{errorContent}</p>
      </div>
    )
  }
}

export default Toast
