// Styles
import css from './styles.scss'

// Components
import Pulse from 'components/Loaders/Pulse'

const RoutesLoader = () => {
  return (
    <div className={css.body}>
      <div className={css.pulseWrapper}>
        <Pulse />
      </div>
    </div>
  )
}

export default RoutesLoader
