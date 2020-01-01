// Vendors
import { pathOr } from 'ramda'

import {
  listingStatusValidation,
  businessTypeValidation,
  coordinatesValidation,
  validateBoundingBox
} from '../validations/api'

import { validateString, validateNumber } from '../validations/generics'

/**
 *
 * @param {} property
 *
 * This Function receives a 'Property' from the API.
 * It maps the 'Property' and if any value is not a valid one!! ...
 * it gets converted to null.
 */
const parsePropertyData = property => {
  const bathrooms = pathOr(0, ['bathrooms'], property)
  const usableAreas = pathOr(0, ['usableAreas'], property)
  const listingType = pathOr('', ['listingType'], property)
  const listingStatus = pathOr('', ['listingStatus'], property)
  const parkingSpaces = pathOr(0, ['parkingSpaces'], property)
  const owner = pathOr(false, ['owner'], property)
  const bedrooms = pathOr(0, ['bedrooms'], property)
  const id = pathOr('', ['id'], property)
  const createdAt = pathOr('', ['createdAt'], property)
  const updatedAt = pathOr('', ['updatedAt'], property)
  const images = pathOr([], ['images'], property)
  const {
    yearlyIptu,
    price,
    period,
    businessType,
    monthlyCondoFee,
    rentalTotalPrice
  } = pathOr({}, ['pricingInfos'], property)
  const { neighborhood, city } = pathOr('', ['address'], property)
  const { precision } = pathOr(false, ['address', 'geoLocation'], property)

  const lat = pathOr(false, ['address', 'geoLocation', 'location', 'lat'], property)
  const lon = pathOr(false, ['address', 'geoLocation', 'location', 'lon'], property)

  return {
    // validBoundingBox: validateBoundingBox({ lat, lon }),
    usableAreas: validateNumber(usableAreas),
    listingType: validateString(listingType),
    createdAt: validateString(createdAt),
    listingStatus: listingStatusValidation(listingStatus),
    id: validateString(id),
    parkingSpaces: validateNumber(parkingSpaces),
    updatedAt: validateString(updatedAt),
    owner: validateString(owner),
    images,
    address: {
      city: validateString(city),
      neighborhood: validateString(neighborhood),
      geoLocation: {
        precision: validateString(precision),
        location: {
          lat: coordinatesValidation(lat),
          lon: coordinatesValidation(lon)
        }
      }
    },
    bathrooms: validateNumber(bathrooms),
    bedrooms: validateNumber(bedrooms),
    pricingInfos: {
      yearlyIptu: validateNumber(yearlyIptu),
      price: validateNumber(price),
      period: validateString(period),
      businessType: businessTypeValidation(businessType),
      monthlyCondoFee: validateNumber(monthlyCondoFee),
      rentalTotalPrice: validateNumber(rentalTotalPrice)
    }
  }
}

export default parsePropertyData
