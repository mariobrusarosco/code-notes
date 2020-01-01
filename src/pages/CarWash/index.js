// CONSTANTS
const { E2E } = APP
const { CAR_WASH_PAGE } = E2E

// Components
import Image from 'components/Image'
import GoBack from 'components/GoBack'

// Assets
import logoCarWash from 'assets/images/logo-car-wash.png'

// Styles
import css from './styles.scss'

const LosPollos = () => {
  return (
    <section className={css.page} data-id={CAR_WASH_PAGE}>
      <div className={css.wrapper}>
        <picture className={css.picture}>
          <Image src={logoCarWash.src} alt="Logo Car Wash" />
        </picture>
        <h2>Car Wash</h2>
        <div>...</div>
        <GoBack />
      </div>
    </section>
  )
}

export default LosPollos
