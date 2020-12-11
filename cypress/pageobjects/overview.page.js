/// <reference types="cypress" />

import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class OverviewPage extends Page {
  /**
   * define selectors using getter methods
   */
  get pageHeader() {
    return cy.get("h1");
  }

  open() {
    return super.open("/overview");
  }
}

export default new OverviewPage();