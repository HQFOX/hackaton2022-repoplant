/// <reference types="cypress" />

import LoginPage from "../pageobjects/login.page";
import DetailsPage from "../pageobjects/details.page";
import OverviewPage from "../pageobjects/overview.page";

context("Table:", () => {
  before(() => {
    LoginPage.open();

    LoginPage.login("admin", "password");

    cy.url().should("include", "/overview");
  });

  beforeEach(() => {
    OverviewPage.open();

    cy.url().should("include", "/overview");

    DetailsPage.open();

    cy.url().should("include", "/details");
  });

  it("checkboxes are selected when checkbox all is selected", (done) => {
    // Select Dropdown Value          ${rows_per_page}    20
    DetailsPage.selectDropdownValue(DetailsPage.rowsPerPage, "20");

    // Click Element                  ${bulkAction} ${checkBox}
    DetailsPage.bulkActionCheckbox.click();

    // Wait Until Page Contains       13 / 13
    cy.get("#table-select-all-select-label").then(element => {
      expect(element.text()).to.equal("13 / 13");
    });

    // Page Should Contain Element    ${rows_selected}    limit=13
    DetailsPage.rowsSelected.then(element => {
        expect(element.length).to.equal(13)
    })

    // checkbox Should Be Selected    ${bulkAction} ${checkBox}
    DetailsPage.bulkActionCheckbox.should("be.checked")

    // browser.takeSnapshot("Details page: all selected");
  });
});