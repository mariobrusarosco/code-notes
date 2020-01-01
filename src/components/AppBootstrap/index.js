// Vendors
import { useDispatch } from 'react-redux'
import { useEffect, useState, useMemo } from 'react'
import uuid from 'uuid'

// Actions
import {
  fetchSomeData,
  evaluateSomeData,
  setAppAsLoaded,
  setAppCriticalError
} from 'actions'

// Components
import AppLoader from 'components/Loaders/AppLoader'

// Syles
import css from './styles.scss'

// Utils
import { validateEmail } from 'utils/validations/generics'

// App Data
const { LOCAL_STORAGE_KEY } = APP

const AppBootrap = () => {
  const dispatch = useDispatch()

  const bootsrapApplication = async () => {
    try {
      const data = await dispatch(fetchSomeData())

      await dispatch(evaluateSomeData(data))
    } catch (e) {
      console.warn(e)
      dispatch(setAppCriticalError({ error: e }))
    } finally {
      dispatch(setAppAsLoaded())
    }
  }

  useEffect(() => {
    bootsrapApplication()
  }, [])

  return (
    <div className="app-bootstrap">
      <AppLoader />
    </div>
  )
}

const AppBootrap2 = () => {
  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [formHasError, setFormError] = useState(false)
  const [emailOnLocalStorage, saveEmailOnLocalStorage] = useState(
    () => !!localStorage.getItem(LOCAL_STORAGE_KEY)
  )

  // useEffect(() => {
  //   const emailAlreadySubmitted = localStorage.getItem(LOCAL_STORAGE_KEY)

  //   if(emailAlreadySubmitted) {
  //     bootsrapApplication()
  //   }
  // }, [])

  const bootsrapApplication = () => {
    dispatch(setAppAsLoaded())
  }

  const handleOnSubmit = e => {
    e.preventDefault()

    const hasValidEmail = validateEmail(email)

    if (hasValidEmail) {
      const emailAsBase64 = btoa(email)
      saveEmailOnLocalStorage(localStorage.setItem(LOCAL_STORAGE_KEY, emailAsBase64))

      bootsrapApplication()
    } else {
      setFormError(true)
    }
  }

  const handleOnChange = e => {
    setEmail(e.target.value)
  }

  // Internal Components
  const Errors = ({ hasError }) => {
    return hasError && <p className={css.errors}>Please, type a valid email</p>
  }
  const MemoizedErrors = useMemo(() => <Errors hasError={formHasError} />, [formHasError])

  if (emailOnLocalStorage) {
    bootsrapApplication()
    return null
  }

  return (
    <div className={css.appBootrap}>
      <form onSubmit={handleOnSubmit} className={css.form}>
        <p className={css.heading}>Type your email address</p>

        <input
          className={css.emailInput}
          type="email"
          placeholder="email@email.com"
          value={email}
          onChange={handleOnChange}
        />

        <input className={css.submitBtn} type="submit" value="Submit" />

        {MemoizedErrors}
      </form>
    </div>
  )
}

export default AppBootrap2
