import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
      <Link className="item" to="/">
        Home
      </Link>
      {/* <Link className="item" to="/new">New</Link> */}
      {/* <Link className="item" to="/notes">Notes</Link> */}
      <Link className="item" to="/sign-up">
        Sign Up
      </Link>
      {/* <Link className="item" to="/config">Config</Link> */}
      {/* <Link className="item" to="/login">Login</Link> */}
    </header>
  )
}

export default Header
