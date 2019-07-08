export const setGlobalError = errorContent => {
  return {
    type: 'SET_GLOBAL_ERROR',
    errorContent
  }
}

export const resetGlobalError = () => {
  return {
    type: 'RESET_GLOBAL_ERROR'
  }
}

export const setAppAsLoaded = () => {
  return {
    type: 'APP_IS_LOADED'
  }
}
