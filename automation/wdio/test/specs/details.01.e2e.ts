
import LoginPage from "../pageobjects/login.page";
import DetailsPage from "../pageobjects/details.page";
import OverviewPage from "../pageobjects/overview.page";

describe("Table:", () => {
  before(() => {
    LoginPage.open();

    LoginPage.login("admin", "password");

    browser.waitUntil(() => browser.getUrl().endsWith("/overview"));
  });

  beforeEach(() => {
    OverviewPage.open();

    browser.waitUntil(() => browser.getUrl().endsWith("/overview"));

    DetailsPage.open();

    browser.waitUntil(() => browser.getUrl().endsWith("/details"));
  });

  it("checkboxes are selected when checkbox all is selected", () => {
    // Select Dropdown Value          ${rows_per_page}    20
    DetailsPage.selectDropdownValue(DetailsPage.rowsPerPage, "20");

    // Click Element                  ${bulkAction} ${checkBox}
    DetailsPage.bulkActionCheckbox.click();

    // Wait Until Page Contains       13 / 13
    browser.waitUntil(() => $("#table-select-all-select-label").getText() === "13 / 13");

    // Page Should Contain Element    ${rows_selected}    limit=13
    expect(DetailsPage.rowsSelected.length).toBe(13);

    // checkbox Should Be Selected    ${bulkAction} ${checkBox}
    expect(DetailsPage.bulkActionCheckbox).toBeChecked();

    // browser.takeSnapshot("Details page: all selected");
  });

  it("parent checkbox are indeterminate when any checkbox is selected", () => {
    // Element Attribute Value Should Be    ${bulkAction} ${checkBox}    data-indeterminate    false
    expect(DetailsPage.bulkActionCheckbox).toHaveAttribute("data-indeterminate", "false");

    // Select Checkbox                      ${row}(1) ${checkBox}
    DetailsPage.getRow(1).$("input[type='checkbox']").click();

    // Wait Until Page Contains             1 / 13
    browser.waitUntil(() => $("#table-select-all-select-label").getText() === "1 / 13");

    // Page Should Contain Element          ${rows_selected}    limit=1
    expect(DetailsPage.rowsSelected.length).toBe(1);

    // Element Attribute Value Should Be    ${bulkAction} ${checkBox}    data-indeterminate    true
    expect(DetailsPage.bulkActionCheckbox).toHaveAttribute("data-indeterminate", "true");
  });

  it("checkboxes are selected when select all button is clicked", () => {
    // Select Checkbox                ${row}(1) ${checkBox}
    DetailsPage.getRow(1).$("input[type='checkbox']").click();

    // Wait Until Page Contains       Select all
    const selectAcrossPages = $("#table-select-all-pages");
    selectAcrossPages.waitForExist();

    // Click Button                   Select all 13 items across all pages
    selectAcrossPages.waitForClickable();
    selectAcrossPages.click();

    // Wait Until Page Contains       13 / 13
    browser.waitUntil(() => $("#table-select-all-select-label").getText() === "13 / 13");

    // Page Should Contain Element    ${rows_selected}    limit=10
    expect(DetailsPage.rowsSelected.length).toBe(10);

    // checkbox Should Be Selected    ${bulkAction} ${checkBox}
    expect(DetailsPage.bulkActionCheckbox).toBeChecked();
  });

  it("checkboxes are selected when they are selected one by one", () => {
    // Click Element                  ${bulkAction} ${checkBox}
    DetailsPage.bulkActionCheckbox.click();

    // Click Button                   ${nav_next_page}
    $("button[aria-label='Next Page']").click();

    // Select Checkbox                ${row}(1) ${checkBox}
    DetailsPage.getRow(1).$("input[type='checkbox']").click();

    // Select Checkbox                ${row}(2) ${checkBox}
    DetailsPage.getRow(2).$("input[type='checkbox']").click();

    // Select Checkbox                ${row}(3) ${checkBox}
    DetailsPage.getRow(3).$("input[type='checkbox']").click();

    // Wait Until Page Contains       13 / 13
    browser.waitUntil(() => $("#table-select-all-select-label").getText() === "13 / 13");

    // Page Should Contain Element    ${rows_selected}    limit=3
    expect(DetailsPage.rowsSelected.length).toBe(3);

    // checkbox Should Be Selected    ${bulkAction} ${checkBox}
    expect(DetailsPage.bulkActionCheckbox).toBeChecked();
  });
});
