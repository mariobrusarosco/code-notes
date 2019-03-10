// import { handleActions } from 'redux-actions'

// const userReducer = () => handleActions(
//   {
//     'FETCH_USER': (state, action) => !console.log('action', action) && ({
//       [...state, user]
//     })
//   },
//   {}
// )

const usersReducer = (state = [], action) => {
  switch(action.type) {
    case 'FETCH_USER':
      return [...state, action.payload]
      break
    default:
      return state
  }
}

export default usersReducer
