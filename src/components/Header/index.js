import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <header className="header">
      <Link to="/">Home</Link>
      <Link to="/new">New</Link>
      <Link to="/notes">Notes</Link>
    </header>
  )
}

export default Header
