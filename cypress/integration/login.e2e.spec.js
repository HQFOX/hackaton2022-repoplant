/// <reference types="cypress" />

import LoginPage from "../pageobjects/login.page";
import OverviewPage from "../pageobjects/overview.page";

context("My Login application", () => {
  it("should login with valid credentials", (done) => {
    LoginPage.open();

    LoginPage.login("admin", "password");
    
    OverviewPage.pageHeader.then((item) => {
      expect(item).to.contain("Overview")
      done()
    });
  });
});