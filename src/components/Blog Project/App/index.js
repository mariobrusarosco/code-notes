import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import PostList from '../PostList'

import reducers from '../../../reducers'

const store = createStore(reducers, applyMiddleware(thunk))

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="blog ui container">
          <h1>
            Blog
          </h1>
          <PostList />
        </div>
      </Provider>
    )
  }
}



export default App
