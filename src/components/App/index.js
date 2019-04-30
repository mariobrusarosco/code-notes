import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'

// Components
import Header from 'components/Header'

// Aoo Routes
import AppRoutes from 'components/AppRoutes'

// console.log(newNote)
class App extends Component {
  render() {
    return (
      <div className="main">
        <BrowserRouter>
          <Header />
          <AppRoutes />
        </BrowserRouter>
      </div>
    )
  }
}

export default App
