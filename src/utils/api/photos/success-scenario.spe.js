import { usableAreasValidation, listingStatusValidation } from '../../validations/api'

import { validateNumber, validateString } from '../../validations/generics'

const valuesToTestANumber = [10, '1', ' 10 ']
const valuesToTestAString = ['RENTAL', '1', 'R$10']

describe(`ALL VALIDATIONS MUST RECEIVE [VALID] DATA AND NOT RETURN FALSE`, () => {
  it(`[usableAreas]`, () => {
    valuesToTestANumber.forEach(input => {
      const result = usableAreasValidation(input)

      expect(result).toBeTruthy()
    })
  })
  it(`[listingStatus]`, () => {
    ;['active', 'ACTIVE', 'Active', 'activE', 'acTive'].forEach(input => {
      const result = listingStatusValidation(input)

      expect(result).toBeTruthy()
    })
  })

  it(`[id]`, () => {
    valuesToTestAString.forEach(input => {
      const result = validateString(input)

      expect(result).toBeTruthy()
    })
  })

  it(`[parkingSpaces]`, () => {
    valuesToTestANumber.forEach(input => {
      const result = validateNumber(input)

      expect(result).toBeTruthy()
    })
  })

  it(`[city]`, () => {
    valuesToTestAString.forEach(input => {
      const result = validateString(input)

      expect(result).toBeTruthy()
    })
  })

  it(`[neighborhood]`, () => {
    valuesToTestAString.forEach(input => {
      const result = validateString(input)

      expect(result).toBeTruthy()
    })
  })

  // it(`[geoLocation]`, () => {
  //   valuesToTestAString.forEach(input => {
  //     const result = geoLocationValidation(input)

  //     expect(result).toBeTruthy()
  //   })
  // })

  it(`[bathrooms]`, () => {
    valuesToTestANumber.forEach(input => {
      const result = validateNumber(input)

      expect(result).toBeTruthy()
    })
  })

  it(`[bedrooms]`, () => {
    valuesToTestANumber.forEach(input => {
      const result = validateNumber(input)

      expect(result).toBeTruthy()
    })
  })

  it(`[yearlyIptu]`, () => {
    valuesToTestANumber.forEach(input => {
      const result = validateNumber(input)

      expect(result).toBeTruthy()
    })
  })

  it(`[price]`, () => {
    valuesToTestANumber.forEach(input => {
      const result = validateNumber(input)

      expect(result).toBeTruthy()
    })
  })

  it(`[businessType]`, () => {
    valuesToTestAString.forEach(input => {
      const result = validateString(input)

      expect(result).toBeTruthy()
    })
  })

  it(`[monthlyCondoFee]`, () => {
    valuesToTestANumber.forEach(input => {
      const result = validateNumber(input)

      expect(result).toBeTruthy()
    })
  })

  it(`[rentalTotalPrice]`, () => {
    valuesToTestANumber.forEach(input => {
      const result = validateNumber(input)

      expect(result).toBeTruthy()
    })
  })
})
