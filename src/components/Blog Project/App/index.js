import React from 'react'

import PostList from '../PostList'


class App extends Component {


  render() {
    return (
      <div className="blog ui container">
        <h1>
          Blog
        </h1>
        <PostList />
      </div>
    )
  }
}



export default App
