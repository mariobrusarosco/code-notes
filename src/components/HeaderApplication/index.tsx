import { Link } from 'react-router-dom'

// Utils
import ROUTES from 'routes'

const HeaderApplication = () => {
  console.log('[ HeaderApplication ]')

  return (
    <header className="header" data-test="header-application">
      <Link className="item" to={ROUTES.HOME}>
        home
      </Link>
      <Link className="item" to={ROUTES.NEW}>
        new
      </Link>
      <Link className="item" to={ROUTES.CONFIG}>
        config
      </Link>
    </header>
  )
}

export default HeaderApplication
