/// <reference types="cypress" />

context('Window', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('cy.title() - get the title', () => {
    // https://on.cypress.io/title
    cy.title().should('include', 'UIKit React setup')
  })
})
