import jwt from 'jsonwebtoken'

export const decodeToken = token => {
  if (token) {
    const userData = jwt.decode(token)
    return { userIsLogged: true, userData }
  }

  return [false, null]
}
