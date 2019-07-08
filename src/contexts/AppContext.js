// const props = {
//   appHasError: true,
//   errorContent: 'Lorem Ipsum!'
// }
// export const AppContextOld = React.createContext(props)

// class AppContextProvider extends Component {
//   state = {
//     appHasError: true,
//     errorContent: 'Lorem Ipsum 2!'
//   }

//   render() {
//     return (
//       <AppContext2.Provider
//         value={{
//           ...this.state
//         }}
//       >
//         {this.props.children}
//       </AppContext2.Provider>
//     )
//   }
// }

// export default AppContextProvider
// Reducer
import { AppReducer } from 'reducers/AppReducer'

import { createContext, useReducer } from 'react'

export const AppContext = createContext()

const initialState = {
  appHasError: false,
  errorContent: null
}

export const AppContextProvider = ({ children }) => {
  const [App, AppDispatch] = useReducer(AppReducer, initialState)

  return (
    <AppContext.Provider value={{ App, AppDispatch }}>{children}</AppContext.Provider>
  )
}
