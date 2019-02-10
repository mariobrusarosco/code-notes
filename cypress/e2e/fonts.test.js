describe('Test for support of Embded Fonts', () => {
  it('Must have a paragraph rendered with a Quicksand, Bold  font', () => {
    cy.visit('/')
      .get('.font-bold')
      .should('have.css', 'font-family', 'Quicksand, sans-serif')
      .should('have.css', 'font-weight', '900')
  })
  it('Must have a paragraph rendered with a Quicksand,  Light font', () => {
    cy.visit('/')
      .get('.font-lighter')
      .should('have.css', 'font-family', 'Quicksand, sans-serif')
      .should('have.css', 'font-weight', '100')
  })
})
