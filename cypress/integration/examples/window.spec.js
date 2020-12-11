/// <reference types="cypress" />

context('Window', () => {
  beforeEach(() => {
    cy.visit('https://lumada-design.github.io/app/master/')
  })

  it('cy.title() - get the title', () => {
    // https://on.cypress.io/title
    cy.title().should('include', 'UIKit React setup')
  })
})
