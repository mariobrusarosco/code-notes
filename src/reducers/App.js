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
    default:
      return state
  }
}
