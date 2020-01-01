import { validatePhotosRequest } from '../index'

import { responseWithInvalidTitles, responseWithInvalidAlbumIDs } from './fixtures'

describe(`RESPONSE OF API [PHOTOS]`, () => {
  it(`Must receive invalid [ALBUM IDs], validate them and return the invalid ones as 'false'`, () => {
    const validatedResponse = validatePhotosRequest(responseWithInvalidAlbumIDs)

    validatedResponse.forEach(photo => {
      expect(photo.albumId).not.toBeTruthy()
    })
  })

  it(`Must receive invalid [TITLES], validate them and return the invalid ones as 'false'`, () => {
    const validatedResponse = validatePhotosRequest(responseWithInvalidTitles)

    validatedResponse.forEach(photo => {
      expect(photo.title).not.toBeTruthy()
    })
  })
})
