import { validatePhotosRequest } from '../index'

import { responseWithValidAlbumIDs, responseWithValidTitles } from './fixtures'

describe(`RESPONSE OF API [PHOTOS]`, () => {
  it(`Must receive objects with valid [ALBUM IDs] and for all of them return [albumId] prop as [truthy]`, () => {
    const validatedResponse = validatePhotosRequest(responseWithValidAlbumIDs)

    validatedResponse.forEach(photo => {
      expect(photo.albumId).toBeTruthy()
    })
  })

  it(`Must receive objects with valid [TITLES], validate them and return the invalid ones as 'false'`, () => {
    const validatedResponse = validatePhotosRequest(responseWithValidTitles)

    validatedResponse.forEach(photo => {
      expect(photo.title).toBeTruthy()
    })
  })
})
