import { Link } from 'react-router-dom'
import React from 'react'

// Utils
import ROUTES from 'routes'

import './styles.css'

const HeaderLanding = () => {
  console.log('[ HeaderLanding ]')

  return (
    <header className="header-landing">
      <Link className="item" to={ROUTES.SIGN_UP}>
        Sign Up
      </Link>
      <Link className="item" to={ROUTES.LOGIN}>
        Login
      </Link>
      <button>MB</button>
    </header>
  )
}

export default HeaderLanding
