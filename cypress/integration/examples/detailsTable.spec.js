/// <reference types="cypress" />

context('Details Table', () => {
  beforeEach(() => {
    cy.setCookie("token", "value")
    cy.visit('http://localhost:3000/')
    cy.visit('http://localhost:3000/#/templates/details')
  })

  it('cy.table exists', () => {
    // https://on.cypress.io/title
    cy.get("#table")
  })

  it('cy.table can change its page size', () => {
    // https://on.cypress.io/title
    cy.get("div[class*='HvPagination-pageSizeOptionsSelect']").click()

    cy.get("ul[role='listbox']")
    cy.get(`li[role='option'][value='20']`).click()
  })
})
