// Vendors

// Generics Validators
import { validateNumber, validateString } from '../../generics'

export const validatePhotosRequest = data => {
  return data.map(photo => ({
    albumId: validateNumber(photo.albumId),
    id: validateNumber(photo.id),
    thumbnailUrl: validateString(photo.thumbnailUrl),
    title: validateString(photo.title),
    url: validateString(photo.url)
  }))
}
