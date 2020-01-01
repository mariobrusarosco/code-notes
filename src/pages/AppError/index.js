// Vendors
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

// Components
import Pulse from 'components/Loaders/Pulse'

// Actions
import { resetAppCriticalError } from 'actions'

// Styles
import css from './styles.scss'

const AppError = () => {
  // Redux / Store
  const dispatch = useDispatch()
  const appCriticalError = useSelector(({ app }) => app.appCriticalError)

  useEffect(() => {
    dispatch(resetAppCriticalError())
  }, [])

  return (
    <section className={css.notFound}>
      <div className={css.wrapper}>
        <p className={css.ops}>Ops!!</p>
        <p className={css.description}>{appCriticalError.messageForUsers}</p>

        <div className={css.pulseWrapper}>
          <Pulse />
        </div>
      </div>
    </section>
  )
}

export default AppError
