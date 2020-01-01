// E2E Data
const APP = require('../../src/app-configuration.json')
const { E2E, ROOT_URL, API } = APP

// API
const { API_ROOT } = API

// E2E
const { HEADER, PHOTOS } = E2E

const bootstrapUrl = `${API_ROOT}photos`

beforeEach(() => {
  cy.server()
})

describe('Initial Fetch', () => {
  it('Must verify if the App was bootstraped', () => {
    cy.route(bootstrapUrl).as('bootstrapApp')

    cy.visit('/')
    cy.get(`[data-id="${HEADER}"]`)
      // Find a link that redirects to the ROOT URL
      .find(`a[data-id="${PHOTOS}"]`)
      .click()

    cy.wait('@bootstrapApp')

    // // Check if Member Component was loaded
    // cy.get(`[data-id=${MEMBER}]`)
  })

  // it('Must go back to Home Page', () => {
  //   // Select the Header
  //   cy.get(`[data-id=${HEADER}]`)
  //     // Find a link that redirects to the ROOT URL
  //     .find(`a[href="${ROOT_URL}"]`)
  //     .click()
  // })

  // it('Must go to ASDSADA', () => {
  //   // Go to Viva ASDSADASD
  //   cy.get(`a[href="/DASDA"]`).click()

  //   // Check the correct window location Hash
  //   cy.url().should('include', '/ASDASD')

  //   // Check if the VDASDASDSADAS Page Component was correctly loaded
  //   cy.get(`[data-id="${E2E.ASDSADSA}"]`)
  // })
})
