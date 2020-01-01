// CONSTANTS
const { E2E, BUSINESS } = APP
const { LOS_POLLOS_PAGE } = E2E

// Components
import Image from 'components/Image'
import GoBack from 'components/GoBack'

// Assets
import logoLosPollos from 'assets/images/logo-los-pollos.jpg'

// Styles
import css from './styles.scss'

const LosPollos = () => {
  return (
    <section className={css.page} data-id={LOS_POLLOS_PAGE}>
      <div className={css.wrapper}>
        <picture className={css.picture}>
          <Image src={logoLosPollos.src} alt="Logo Los Pollos Hermanos" />
        </picture>
        <h2>Los Pollos Hermanos</h2>
        <div>...</div>
        <GoBack />
      </div>
    </section>
  )
}

export default LosPollos
