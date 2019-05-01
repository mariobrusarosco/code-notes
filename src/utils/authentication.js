import jwt from 'jsonwebtoken'

export const parseUserData = token => {
  if (token) {
    console.log('User has a UID(token) stored...checking if it`s valid (not working so far)')
    const decodedData = jwt.decode(token);
    return [true, decodedData]
  }

  console.log('No Stored UID(token)')
  return [false, null]
}
