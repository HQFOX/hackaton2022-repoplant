/// <reference types="cypress" />

import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DetailsPage extends Page {
  get pageHeader() {
    return cy.get("h1");
  }

  get rowsPerPage() {
    return cy.get("div[class*='HvPagination-pageSizeOptionsSelect']");
  }

  getRow(n) {
    return cy.get(`div[role=rowgroup]>div:nth-child(${n})`);
  }

  get rowsSelected() {
    return cy.get("div[role=rowgroup]>div [aria-selected=true]");
  }

  get bulkActionCheckbox() {
    return cy.get(".HvBulkActions-root input[type='checkbox']");
  }

  open() {
    return super.open("/templates/details");
  }
}

export default new DetailsPage();