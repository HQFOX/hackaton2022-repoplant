/// <reference types="cypress" />

import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
  /**
   * define selectors using getter methods
   */
  get inputUsername() {
    return cy.get("#username-input");
  }

  get inputPassword() {
    return cy.get("#password-input");
  }

  get btnSubmit() {
    return cy.get('button[type="submit"]');
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  login(username, password) {
    this.inputUsername.clear();
    this.inputUsername.type(username);
    this.inputPassword.clear();
    this.inputPassword.type(password);
    this.btnSubmit.click();
  }

  /**
   * overwrite specifc options to adapt it to page object
   */
  open() {
    return super.open("/login");
  }
}

export default new LoginPage();