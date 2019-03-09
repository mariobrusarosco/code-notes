export const selectSong = song => {
  return {
    type: 'SELECT_SONG',
    payload: song
  }
}

import axiosJsonPlaceholder from '../api/json-placeholder'

export const fetchPosts = async () => {
  const posts = await axiosJsonPlaceholder.get('/posts')

  return {
    type: 'FETCH_POSTS',
    posts
  }
}






