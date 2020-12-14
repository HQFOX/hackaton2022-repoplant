/// <reference types="cypress" />

import LoginPage from "../pageobjects/login.page";
import DetailsPage from "../pageobjects/details.page";
import OverviewPage from "../pageobjects/overview.page";

context("Table:", () => {
  beforeEach(() => {
    LoginPage.open();

    LoginPage.login("admin", "password");

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

      // Page Should Contain Element    ${rows_selected}    limit=13
      DetailsPage.rowsSelected.then(element => {
        expect(element.length).to.equal(13)

        // checkbox Should Be Selected    ${bulkAction} ${checkBox}
        DetailsPage.bulkActionCheckbox.should("be.checked")

        done();
      })
    });
  });

  it("parent checkbox are indeterminate when any checkbox is selected", (done) => {
    // Element Attribute Value Should Be    ${bulkAction} ${checkBox}    data-indeterminate    false
    DetailsPage.bulkActionCheckbox.should("have.attr", "data-indeterminate", "false")

    // Select Checkbox                      ${row}(1) ${checkBox}
    DetailsPage.getRow(1).find("input[type='checkbox']").click();

    // Wait Until Page Contains             1 / 13
    cy.get("#table-select-all-select-label").then(element => {
      expect(element.text()).to.equal("1 / 13");

      // Page Should Contain Element          ${rows_selected}    limit=1
      DetailsPage.rowsSelected.then(row => {
        expect(row.length).to.equal(1);

        // Element Attribute Value Should Be    ${bulkAction} ${checkBox}    data-indeterminate    true
        DetailsPage.bulkActionCheckbox.should("have.attr", "data-indeterminate", "true")
        done();
      });
    });
    
  });

  it("checkboxes are selected when select all button is clicked", (done) => {
    // Select Checkbox                      ${row}(1) ${checkBox}
    DetailsPage.getRow(1).find("input[type='checkbox']").click();

    cy.get("#table-select-all-pages").click();

    cy.get("#table-select-all-select-label").then(element => {
      expect(element.text()).to.equal("13 / 13");

      // Page Should Contain Element    ${rows_selected}    limit=13
      DetailsPage.rowsSelected.then(element => {
        expect(element.length).to.equal(10)

        // checkbox Should Be Selected    ${bulkAction} ${checkBox}
        DetailsPage.bulkActionCheckbox.should("be.checked")

        done();
      })
    });
  });

  it("checkboxes are selected when they are selected one by one", (done) => {
    // Click Element                  ${bulkAction} ${checkBox}
    DetailsPage.bulkActionCheckbox.click();

    // Click Button                   ${nav_next_page}
    cy.get("button[aria-label='Next Page']").click();

    // Select Checkbox                ${row}(1) ${checkBox}
    DetailsPage.getRow(1).find("input[type='checkbox']").click();

    // Select Checkbox                ${row}(2) ${checkBox}
    DetailsPage.getRow(2).find("input[type='checkbox']").click();

    // Select Checkbox                ${row}(3) ${checkBox}
    DetailsPage.getRow(3).find("input[type='checkbox']").click();

    cy.get("#table-select-all-select-label").then(element => {
      expect(element.text()).to.equal("13 / 13");

      // Page Should Contain Element    ${rows_selected}    limit=13
      DetailsPage.rowsSelected.then(element => {
        expect(element.length).to.equal(3)

        // checkbox Should Be Selected    ${bulkAction} ${checkBox}
        DetailsPage.bulkActionCheckbox.should("be.checked")

        done();
      })
    });
  });
});