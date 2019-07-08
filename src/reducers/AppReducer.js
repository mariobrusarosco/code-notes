export const AppInitialState = {
  appIsLoaded: false,
  appHasError: false,
  errorContent: null
}

export const AppReducer = (state, { type, errorContent }) => {
  switch (type) {
    case 'SET_GLOBAL_ERROR':
      return {
        ...state,
        appHasError: true,
        errorContent
      }
    case 'RESET_GLOBAL_ERROR':
      return {
        ...state,
        appHasError: false,
        errorContent: null
      }
    case 'APP_IS_LOADED':
      return { ...state, appIsLoaded: true }
    default:
      return state
  }
}
