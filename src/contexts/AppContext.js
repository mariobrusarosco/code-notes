const props = {
  appHasError: true,
  errorContent: 'Lorem Ipsum!'
}
export const AppContext = React.createContext(props)

class AppContextProvider extends Component {
  state = {
    appHasError: true,
    errorContent: 'Lorem Ipsum 2!'
  }

  render() {
    return (
      <AppContext2.Provider
        value={{
          ...this.state
        }}
      >
        {this.props.children}
      </AppContext2.Provider>
    )
  }
}

export default AppContextProvider

export const AppContext2 = React.createContext()
