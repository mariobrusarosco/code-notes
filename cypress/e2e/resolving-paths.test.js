describe('Testing if this build supports absolute path resolution', () => {
  it('Must find a specific text render via absolute resolution', () => {
    cy.visit('/')

    cy.get('.resolving-paths').contains('This is some text')
  })
})
