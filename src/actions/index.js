export const logUser = payload => {
  return {
    type: 'LOG_IN',
    payload
  }
}

export const setAppAsLoaded = () => {
  return {
    type: 'APP_LOADED'
  }
}

export const toggleModal = payload => {
  return {
    type: 'TOGGLE_MODAL',
    ...payload
  }
}

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
    const response = await axiosJsonPlaceholder.get(`/users/${id}`)

    dispatch({ type: 'FETCH_USER', payload: response.data })
  }
}
