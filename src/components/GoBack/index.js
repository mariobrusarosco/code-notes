// Vendors
import { memo } from 'react'
import classnames from 'classnames'

// Styles
import css from './styles.scss'

// Utils
import history from 'utils/app-history'

const GoBack = memo(({ customStyles, buttonText = 'back' }) => {
  const handleGoBack = () => history.goBack()
  console.log(customStyles)
  return (
    <button
      style={{ ...customStyles }}
      className={classnames([css.btn], 'button go-back')}
      onClick={handleGoBack}
    >
      {buttonText}
    </button>
  )
})

export default GoBack
