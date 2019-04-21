
import { handleActions } from 'redux-actions'

const blogReducer = handleActions({
  FETCH_POSTS: (state, { payload: posts }) => ({
    posts
  })
},[])

export default blogReducer
