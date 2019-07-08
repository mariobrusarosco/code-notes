import { useState, useContext } from 'react'
// Styles
import { toast, content, closeBtn, wrapper } from './styles.css'

// Context
import { AppContext } from 'contexts/AppContext'

// Actions
import { resetGlobalError } from 'actions/App'

const Toast = () => {
  const { App, AppDispatch } = useContext(AppContext)
  const { appHasError, errorContent } = App

  const hideToast = () => AppDispatch(resetGlobalError())

  if (!appHasError) {
    return null
  }

  return (
    <div className={toast}>
      <div className={wrapper}>
        <div className={content}>{errorContent}</div>
        <button className={closeBtn} onClick={hideToast}>
          x
        </button>
      </div>
    </div>
  )
}

export default Toast
