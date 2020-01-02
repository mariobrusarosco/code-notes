import {
  usableAreasValidation,
  listingStatusValidation,
  idValidation
} from '../../validations/api'

import { validateNumber, validateString } from '../../validations/generics'

const valuesToTestANumber = [null, undefined, false, '', '   ', '100a00', 0, '0', '00000']
const valuesToTestAString = [
  1,
  {},
  [],
  null,
  undefined,
  false,
  NaN,
  '',
  '  ',
  'null',
  'NULL',
  'undefined',
  'UNDEFINED',
  'false',
  'FALSE',
  'NaN',
  'NAN'
]

describe(`ALL VALIDATIONS MUST RECEIVE [INVALID] DATA AND RETURN FALSE`, () => {
  it(`[usableAreas]`, () => {
    valuesToTestANumber.forEach(input => {
      const result = usableAreasValidation(input)

      expect(result).not.toBeTruthy()
    })
  })

  it(`[listingStatus]`, () => {
    ;[...valuesToTestAString, 'ACTDIVE'].forEach(input => {
      const result = listingStatusValidation(input)

      expect(result).not.toBeTruthy()
    })
  })

  it(`[id]`, () => {
    valuesToTestAString.forEach(input => {
      const result = idValidation(input)

      expect(result).not.toBeTruthy()
    })
  })

  it(`[parkingSpaces]`, () => {
    valuesToTestANumber.forEach(input => {
      const result = validateNumber(input)

      expect(result).not.toBeTruthy()
    })
  })

  it(`[city]`, () => {
    valuesToTestAString.forEach(input => {
      const result = validateString(input)

      expect(result).not.toBeTruthy()
    })
  })

  it(`[neighborhood]`, () => {
    valuesToTestAString.forEach(input => {
      const result = validateString(input)

      expect(result).not.toBeTruthy()
    })
  })

  // it(`[geoLocation]`, () => {
  //   valuesToTestAString.forEach(input => {
  //     const result = geoLocationValidation(input)

  //     expect(result).not.toBeTruthy()
  //   })
  // })

  it(`[bathrooms]`, () => {
    valuesToTestANumber.forEach(input => {
      const result = validateNumber(input)

      expect(result).not.toBeTruthy()
    })
  })

  it(`[bedrooms]`, () => {
    valuesToTestANumber.forEach(input => {
      const result = validateNumber(input)

      expect(result).not.toBeTruthy()
    })
  })

  it(`[yearlyIptu]`, () => {
    valuesToTestANumber.forEach(input => {
      const result = validateNumber(input)

      expect(result).not.toBeTruthy()
    })
  })

  it(`[price]`, () => {
    valuesToTestANumber.forEach(input => {
      const result = validateNumber(input)

      expect(result).not.toBeTruthy()
    })
  })

  it(`[businessType]`, () => {
    valuesToTestAString.forEach(input => {
      const result = validateString(input)

      expect(result).not.toBeTruthy()
    })
  })

  it(`[monthlyCondoFee]`, () => {
    valuesToTestANumber.forEach(input => {
      const result = validateNumber(input)

      expect(result).not.toBeTruthy()
    })
  })

  it(`[rentalTotalPrice]`, () => {
    valuesToTestANumber.forEach(input => {
      const result = validateNumber(input)

      expect(result).not.toBeTruthy()
    })
  })
})
