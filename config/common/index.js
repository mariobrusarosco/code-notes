// Project's Package JSON
import packageJSON from '../../package.json'

// Utils
import generateShortHash from '../../src/utils/generate-short-hash'

// ERRORS MAP
import errorsMap from './errorsMap'

const commonConfiguration = {
  APP_NAME: 'Boilerplate',
  ENVIRONMENT: process.env.NODE_ENV,
  VERSION: packageJSON.version,
  ROOT_URL: '/',
  API: {
    API_ROOT: 'https://api.unsplash.com/'
  },
  LOCAL_STORAGE_KEY: `local__Boilerplate`,
  BUSINESS: {
    LOS_POLLOS: 'los-pollos',
    CAR_WASH: 'car-wash',
    WALTER: 'walterWhite',
    JESSE: 'jessePinkman'
  },
  API_MAPPER: {},
  E2E: {
    HEADER: generateShortHash(),
    HOME: generateShortHash(),
    PHOTOS: generateShortHash()
  },
  UNIT: {
    LISTING_STATUS: 'active'
  },
  ERRORS: { ...errorsMap }
}

module.exports = commonConfiguration
