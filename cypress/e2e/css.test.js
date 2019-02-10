describe('Test for support of plain CSS', () => {
  it('Must be a text in blue - rgb(0,0,255)', () => {
    cy.visit('/')
      .get('.text-styled')
      .should('have.css', 'color', 'rgb(0, 0, 255)')
  })
})
