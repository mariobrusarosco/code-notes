// import axiosJsonPlaceholder from '../api/json-placeholder'
// import _ from 'lodash'

export const logUser = () => {
  return {
    type: 'LOG_IN'
  }
}

export const loadUserData = payload => ({
  type: 'LOAD_USER_DATA',
  payload
})

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts())

  const userIds = _.chain(getState().blog.posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value()
  }

export const fetchPosts = () => async dispatch => {
  const posts = await axiosJsonPlaceholder.get('/posts')

  dispatch({ type: 'FETCH_POSTS', payload: posts.data })
}

export const fetchUser = function(id) {
  return async function(dispatch) {
    const response =  await axiosJsonPlaceholder.get(`/users/${id}`)

    dispatch({ type: 'FETCH_USER', payload: response.data })
  }
}






