// Vendors
import { pathOr } from 'ramda'
// CONSTANTS
const { YOUR_CONSTANT } = APP || global.APP

const initialState = []

const exampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'EVALUATE_SOME_DATA':
      const evaluation = pathOr({}, ['evaluation'], action)

      // return { ...state, ...evaluation }
      return [...state, ...evaluation]
    default:
      return state
  }
}

export default exampleReducer
