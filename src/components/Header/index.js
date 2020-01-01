// Vendors
import { Link, NavLink } from 'react-router-dom'

// Assets
import logo from 'assets/images/logo.svg'

// Components
import Image from 'components/Image'

// Styles
import css from './styles.scss'

// Constants
const { APP_NAME } = APP

// E2E Data
const {
  E2E: { HEADER, PHOTOS }
} = APP

// Routes
import { routesAsObject } from 'configPath/common/routes'

const { Member } = routesAsObject

const Header = () => {
  return (
    <header className={css.header} data-id={HEADER}>
      <div className={css.wrapper}>
        <div className={css.logo}>
          <Link to="/">
            <Image src={logo} alt={`Logo ${APP_NAME}`} />
          </Link>
        </div>
      </div>
    </header>
  )
}

const Header2 = () => {
  return (
    <header className={css.header} data-id={HEADER}>
      <div className={css.wrapper}>
        <NavLink className={css.link} to={`/`} exact>
          Home
        </NavLink>
        <NavLink className={css.link} to={`${Member.route}/photos`} data-id={PHOTOS}>
          <span>Photos</span>
        </NavLink>
        <NavLink className={css.link} to={`${Member.route}/photos?perPage=15`}>
          <span>With Pag.</span>
        </NavLink>
        <NavLink className={css.link} to={`${Member.route}/wrong`}>
          <span>Wrong Route</span>
        </NavLink>
      </div>
    </header>
  )
}

export default Header2
