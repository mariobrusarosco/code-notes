describe('Sign Up Form Validation', () => {
  it('Must check if a message error appears when user focus on an input and then "blurs" without passing any data into it', () => {
    cy.visit('/')

    cy.get('[href="/sign-up"]')
      .click()

    cy.get('[inputid="signup-firstname"]')
      .focus()
      .blur()
      .next('.error-wrapper')

    cy.get('[inputid="signup-lastname"]')
      .focus()
      .blur()
      .next('.error-wrapper')

    cy.get('[inputid="signup-email"]')
      .focus()
      .blur()
      .next('.error-wrapper')

    cy.get('[inputid="signup-password"]')
      .focus()
      .blur()
      .next('.error-wrapper')
  })

  // it('Must fill all inputs but with invalida')
})
