/// <reference types="cypress" />

context('Details Table', () => {
  beforeEach(() => {
    cy.visit('/#/templates/details')
  })

  it('cy.table exists', () => {
    // https://on.cypress.io/title
    cy.get("p-1-table")
  })
})
