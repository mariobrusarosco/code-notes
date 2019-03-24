import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Header from '../Header'
import StreamCreate from '../streams/StreamCreate'
import StreamList from '../streams/StreamList'
import StreamEdit from '../streams/StreamEdit'
import StreamDelete from '../streams/StreamDelete'
import StreamShow from '../streams/StreamShow'

class App extends Component {

  render() {
    return (
      <div className="container ui">
        <h1>Stream</h1>
        <BrowserRouter>
          <Header/>
          <Route path="/" exact component={StreamList} />
          <Route path="/stream/new" component={StreamCreate} />
          <Route path="/stream/edit" component={StreamEdit} />
          <Route path="/stream/delete" component={StreamDelete} />
          <Route path="/stream/show" component={StreamShow} />
        </BrowserRouter>
      </div>
    )
  }
}

export default App
