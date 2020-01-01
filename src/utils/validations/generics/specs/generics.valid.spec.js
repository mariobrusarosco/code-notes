import { validateNumber, validateString, validateEmail } from '../index'

import { validNumbers, validStrings, validEmails } from './fixtures'

describe(`VALIDATIONS OF SOME JAVASCRIPT'S DATA TYPES`, () => {
  it(`Must receive valid inputs, try to convert them to valid a [Number] return the input itseld`, () => {
    validNumbers.forEach(input => {
      const result = validateNumber(input)

      expect(result).toBeTruthy()
    })
  })
})

describe(`VALIDATIONS OF STRINGS`, () => {
  it(`Must receive valid inputs, try to convert them to valid a [Number] return the input itself`, () => {
    validStrings.forEach(input => {
      const result = validateString(input)

      expect(result).toBeTruthy()
    })
  })
})

describe(`VALIDATIONS OF EMAILS`, () => {
  it(`Must receive invalid input, try to convert them to valid a [Email]  and return 'true'`, () => {
    validEmails.forEach(input => {
      const result = validateEmail(input)

      expect(result).toBeTruthy()
    })
  })
})
