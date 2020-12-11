/// <reference types="cypress" />
/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default class Page {
  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */
  open(path) {
    return cy.visit(`/#${path}`);
  }

  // select dropdown value
  //   [Documentation]    selects a dropdown value given the dropdown locator and value to select
  //   [Arguments]    ${dropdown}    ${value}
  //   Wait Until Element Is Enabled       ${dropdown}
  //   Click Element                       ${dropdown}
  //   Wait Until Element Is Visible       css:ul[role='listbox']
  //   Click Element                       //li[@role='option' and text()='${value}']
  //   Wait Until Element Is Not Visible   ccy.ss:ul[role='listbox']
  selectDropdownValue(dropdown, value) {
    dropdown.click();

    const list = cy.get("ul[role='listbox']");
    list.get(`li[role='option'][value='${value}']`).click();
  }
}