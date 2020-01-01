import { validateNumber, validateString, validateEmail } from '../index'

import { falsyNumbers, falsyValues, falsyEmails } from './fixtures'

describe(`VALIDATIONS OF SOME JAVASCRIPT'S DATA TYPES`, () => {
  it(`Must receive invalid inputs, try to convert them to valid a [Number] and return 'false'`, () => {
    ;[...falsyValues, ...falsyNumbers].forEach(input => {
      const result = validateNumber(input)

      expect(result).not.toBeTruthy()
    })
  })
})

describe(`VALIDATIONS OF STRINGS`, () => {
  it(`Must receive invalid inputs, try to convert them to valid a [Number]  and return 'false'`, () => {
    falsyValues.forEach(input => {
      const result = validateString(input)

      expect(result).not.toBeTruthy()
    })
  })
})

describe(`VALIDATIONS OF EMAILS`, () => {
  it(`Must receive invalid input, try to convert them to valid a [Email]  and return 'false'`, () => {
    falsyEmails.forEach(input => {
      const result = validateEmail(input)

      expect(result).not.toBeTruthy()
    })
  })
})
