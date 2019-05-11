describe('Sign Up Form Validation', () => {
  it('Must check if a message error appears when user focus on an input and then "blurs" without passing any data into it', () => {
    cy.visit('/')

    cy.get('[href="/sign-up"]').click()

    cy.get('[data-tag="signup-firstname"]')
      .focus()
      .blur()
      .next('.error-wrapper')

    cy.get('[data-tag="signup-lastname"]')
      .focus()
      .blur()
      .next('.error-wrapper')

    cy.get('[data-tag="signup-email"]')
      .focus()
      .blur()
      .next('.error-wrapper')

    cy.get('[data-tag="signup-password"]')
      .focus()
      .blur()
      .next('.error-wrapper')
  })

  it('Must fail to submit the form. Submit btn must be disabled', () => {
    cy.get('[data-tag="signup-submit-btn"]').should('have.attr', 'disabled')
  })
})
