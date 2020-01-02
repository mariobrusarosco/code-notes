// Api Helpers
import defaultAPI from 'api/default'
import dogAPI from 'api/dog'

// Vendors
import { pathOr } from 'ramda'

// Utils
import evaluate from 'utils/evaluation'
import { validatePhotosRequest } from 'utils/validations/api/photos'

// CONSTANTS
const { ERRORS, BUSINESS } = APP || global.APP
const { WALTER, JESSE } = BUSINESS

export const evaluateSomeData = data => {
  const evaluatedItems = evaluate(data)

  // console.log({data})

  return {
    type: 'EVALUATE_SOME_DATA',
    evaluation: data
  }
}

export const fetchSomeData = () => async dispatch => {
  try {
    const response = await defaultAPI.get('/photos')
    const rawData = pathOr({}, ['data'], response)
    console.log({ rawData })
    const validatedData = validatePhotosRequest(rawData)

    dispatch({ type: 'FETCH_SOME_DATA' })

    return rawData
  } catch (e) {
    dispatch(
      setAppCriticalError({
        error: e,
        additionalInfo: {
          source: 'fetchingSomeData',
          errorID: 'A01',
          messageForUsers: ERRORS['A01']
        }
      })
    )
  }
}

export const fetchData = endpoint => async dispatch => {
  try {
    const response = await dogAPI.get(endpoint)
    const rawData = pathOr({}, ['data'], response)

    // const validatedData = validatePhotosRequest(rawData)
    const validatedData = rawData
    console.log({ validatedData })

    dispatch({ type: 'FETCH_DATA' })

    return validatedData
  } catch (e) {
    // debugger
    dispatch(
      setAppCriticalError({
        error: e,
        additionalInfo: {
          source: 'fetchData',
          errorID: 'A01',
          messageForUsers: ERRORS['A01']
        }
      })
    )
  }
}

export const setAppAsLoaded = () => {
  return {
    type: 'APP_IS_LOADED'
  }
}

export const setAppCriticalError = ({ error, additionalInfo }) => {
  const stack = pathOr(null, ['stack'], error)
  const message = pathOr(null, ['message'], error)

  return {
    type: 'APP_HAS_CRITICAL_ERROR',
    errorData: {
      stack,
      message,
      ...additionalInfo
    }
  }
}

export const resetAppCriticalError = () => {
  return {
    type: 'RESET_APP_CRITICAL_ERROR'
  }
}

export const toggleLightbox = payload => {
  return {
    type: 'TOGGLE_LIGHTBOX',
    ...payload
  }
}
