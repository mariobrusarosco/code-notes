import {
  falsyValues,
  validNumbers,
  validStrings
} from '../../../../generics/specs/fixtures'

export const responseWithInvalidAlbumIDs = falsyValues.map(falsy => {
  return {
    albumId: falsy,
    id: '1',
    thumbnailUrl: 'https://via.placeholder.com/150/92c952',
    title: 'accusamus beatae ad facilis cum similique qui sunt',
    url: 'https://via.placeholder.com/600/92c952'
  }
})

export const responseWithValidAlbumIDs = validNumbers.map(truthy => {
  return {
    albumId: truthy,
    id: '1',
    thumbnailUrl: 'https://via.placeholder.com/150/92c952',
    title: 'accusamus beatae ad facilis cum similique qui sunt',
    url: 'https://via.placeholder.com/600/92c952'
  }
})

export const responseWithInvalidTitles = falsyValues.map(falsy => {
  return {
    albumId: '1',
    id: '1',
    thumbnailUrl: 'https://via.placeholder.com/150/92c952',
    title: falsy,
    url: 'https://via.placeholder.com/600/92c952'
  }
})

export const responseWithValidTitles = validStrings.map(truthy => {
  return {
    albumId: truthy,
    id: '1',
    thumbnailUrl: 'https://via.placeholder.com/150/92c952',
    title: 'accusamus beatae ad facilis cum similique qui sunt',
    url: 'https://via.placeholder.com/600/92c952'
  }
})
