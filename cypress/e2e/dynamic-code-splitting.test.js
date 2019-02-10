import { cyan } from 'ansi-colors'

describe('Dynamic Code Splitting Test', () => {
  it('Import a chunk and insert its content in a <p>', () => {
    cy.visit('/')

    cy.get('button').click()

    cy.contains('This is some text within a chunk')
  })
})
