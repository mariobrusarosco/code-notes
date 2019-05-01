const userPublicData = user => {
  const { _id ,firstname, lastname, email, authType } = user

  return { id: _id ,firstname, lastname, email, authType }
}

module.exports = { userPublicData }
