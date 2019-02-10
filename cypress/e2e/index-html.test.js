describe('Testing the index.html file', () => {
  it('Must verify if an index.html is used as a template', () => {
    cy.visit('/')

    cy.get('.template-heading').contains('Webpack Boilerplate')
  })
})
