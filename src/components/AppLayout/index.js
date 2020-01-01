// Vendors
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { withRouter } from 'react-router'

import css from './styles.scss'

// Routes
import { routesAsObject } from 'configPath/common/routes'
const { AppError } = routesAsObject

const AppLayout = ({ children, history, location, ...props }) => {
  const appCriticalError = useSelector(({ app }) => app.appCriticalError)
  const isAppErrorComponent = AppError.path === location.pathname

  useEffect(() => {
    if (appCriticalError.status && !isAppErrorComponent) {
      history.push(AppError.path)
    }

    return () => document.dispatchEvent(new Event('resetImagesOnDOM'))
  }, [appCriticalError.status])

  return <main className={css.appLayout}>{children}</main>
}

export default withRouter(AppLayout)
