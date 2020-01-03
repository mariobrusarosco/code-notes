import { Link } from 'react-router-dom'

// Utils
import ROUTES from 'routes'

const Header = styled.header`
  display: grid;
  grid-auto-flow: column;
  text-align: center;
  background-color: var(--primary-pink, 'red');
`

const HeaderLanding = () => {
  console.log('[ HeaderLanding ]')

  return (
    <Header>
      <Link className="item" to={ROUTES.SIGN_UP}>
        Sign Up
      </Link>
      <Link className="item" to={ROUTES.LOGIN}>
        Login
      </Link>
    </Header>
  )
}

export default HeaderLanding
