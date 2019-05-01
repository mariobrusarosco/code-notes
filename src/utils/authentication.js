import jwt from 'jsonwebtoken'

export const parseUserData = () => {
  const UID = localStorage.getItem('UID')

  if (UID) {
    // console.log('User has a UID(token) stored...checking if it`s valid (not working so far)')
    const decodedData = jwt.decode(UID);
    return [true, decodedData]
  }

  console.log('No Stored UID(token)')
  return [false, null]
}
