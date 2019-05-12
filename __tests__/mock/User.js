const mockDatabaseUser = {
  _id: '795428d42asda',
  firstname: 'Test',
  lastname: 'User',
  email: 'user@test.com',
  authType: ['email'],
  forbbidenProp1: 'no_1!!',
  forbbidenProp2: 'no_2!!'
}

const mockPublicUser = {
  id: '795428d42asda',
  firstname: 'Test',
  lastname: 'User',
  email: 'user@test.com',
  authType: ['email']
}

module.exports = {
  mockDatabaseUser,
  mockPublicUser
}
