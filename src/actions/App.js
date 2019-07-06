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
