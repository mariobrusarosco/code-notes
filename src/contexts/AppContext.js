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
import { AppReducer } from 'reducers/App'

import { createContext, useReducer } from 'react'

export const AppContext = React.createContext()

const initialState = {
  appIsLoaded: false,
  appHasError: false,
  errorContent: null
}

const AppContextProvider = ({ children }) => {
  const [App, dispatch] = useReducer(AppReducer, initialState)

  return <AppContext.Provider value={{ App, dispatch }}>{children}</AppContext.Provider>
}

export default AppContextProvider
