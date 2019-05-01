describe('Sign Up Form Validation', () => {
  it('Must check if a message error appears when user focus on an input and then "blurs" without passing any data into it', () => {
    cy.visit('/')

    cy.get('[href="/sign-up"]')
      .click()

    cy.get('[data-id="signup-firstname"]')
      .focus()
      .blur()
      .next('.error-wrapper')

    cy.get('[data-id="signup-lastname"]')
      .focus()
      .blur()
      .next('.error-wrapper')

    cy.get('[data-id="signup-email"]')
      .focus()
      .blur()
      .next('.error-wrapper')

    cy.get('[data-id="signup-password"]')
      .focus()
      .blur()
      .next('.error-wrapper')
  })

  // it('Must fill all inputs but with invalida')
})
