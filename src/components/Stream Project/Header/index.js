import React from 'react'
import { Link } from 'react-router-dom'

// Component
import GoogleAuth from 'components/GoogleAuth'

const Header = () => {
  return (
    <header className="ui secondary pointing menu">
      <Link to="/" className="item">Streamer</Link>
      <div className="right menu">
        <Link to="/" className="item">All Streams</Link>
        <GoogleAuth />
      </div>
    </header>
  )
}

export default Header