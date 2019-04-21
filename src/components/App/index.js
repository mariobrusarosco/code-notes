import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

// Components
import Header from 'components/Header'

// Pages (Routes)
import Home from '../../pages/Home'
import New from '../../pages/New'
import SignUp from '../../pages/SignUp'

// console.log(newNote)
class App extends Component {
  render() {
    return (
      <div className="main">
        <BrowserRouter>
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/new" component={New} />
          <Route path="/sign-up" component={SignUp} />
        </BrowserRouter>
      </div>
    )
  }
}

export default App
