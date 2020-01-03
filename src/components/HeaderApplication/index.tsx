import { Link } from 'react-router-dom'

// Utils
import ROUTES from 'routes'

// import './styles.css'

const HeaderApplication: React.FunctionComponent = () => {
  // TODO remove console.log
  // console.log('[ HeaderApplication ]')

  return (
    <header className="header" data-test="header-application">
      <Link className="item" to={ROUTES.HOME}>
        home asdasdasd asdasda asdasdas
      </Link>
      <Link className="item" to={ROUTES.NEW}>
        new addasa sdasdasdasas das aadasdas
      </Link>
      <Link className="item" to={ROUTES.CONFIG}>
        config adas  adas asdasdasdasdas
      </Link>
      <button className="user-dropdown">MB</button>
    </header>
  )
}

export default HeaderApplication
