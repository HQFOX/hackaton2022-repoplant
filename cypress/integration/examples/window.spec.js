/// <reference types="cypress" />

context('Window', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('cy.title() - get the title', () => {
    // https://on.cypress.io/title
    cy.title().should('include', 'UIKit React setup')
  })
})
