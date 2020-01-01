// Assets
import logo from 'assets/images/logo.svg'

// Styles
import css from './styles.scss'

// Components
import Image from 'components/Image'
import Pulse from 'components/Loaders/Pulse'

// Contants
const { APP_NAME } = APP

const AppLoader = () => {
  return (
    <section className={css.appLoader}>
      <div className={css.wrapper}>
        <h1 className={css.h1}>
          Project Main Heading
        </h1>

        <div className={css.logo}>
          <Image src={logo} alt={`Logo ${APP_NAME}`} />
        </div>

        <p className={css.intro}>
          <span className={css.greeting}>Introduction Greeeting!</span>
          Introduction main text
        </p>
        <div className={css.pulseWrapper}>
          <Pulse />
        </div>
      </div>
    </section>
  )
}

export default AppLoader
