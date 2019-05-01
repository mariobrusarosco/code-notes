import jwt from 'jsonwebtoken'

export const decodeToken = () => {
  const UID = localStorage.getItem('UID')

  if (UID) {
    // console.log('A Token was found!')
    // console.log('... userAuthenticated (not really authenticating so far!! But it will)')
    const decodedData = jwt.decode(UID);
    return { userAllowed: true, decodedData }
  }

  return [false, null]
}
