import { useState, useContext } from 'react'
// Styles
import { toast } from './styles.css'

// Context
import { AppContext } from 'contexts/AppContext'

// Actions
import { resetGlobalError } from 'actions/App'

const Toast = () => {
  const { App, dispatch } = useContext(AppContext)
  const { appHasError, errorContent } = App

  const hideToast = () => dispatch(resetGlobalError())

  if (!appHasError) return null

  return (
    <div className={toast}>
      <p>{errorContent}</p>
      <button onClick={hideToast}>x</button>
    </div>
  )
}

export default Toast
