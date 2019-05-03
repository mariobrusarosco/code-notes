describe('Login Form Validation', () => {
  it('Must check if a message error appears when user focus on an input and then "blurs" without passing any data into it', () => {
    cy.visit('/')

    cy.get('[data-tag="login-email"]')
      .focus()
      .blur()
      .next('.error-wrapper')

    cy.get('[data-tag="login-password"]')
      .focus()
      .blur()
      .next('.error-wrapper')
  })

  it('Must fail to submit the form. Submit btn must be disabled', () => {
    cy.get('[data-tag="login-submit-btn"]').should('have.attr', 'disabled')
  })
})
