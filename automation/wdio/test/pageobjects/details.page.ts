import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DetailsPage extends Page {
  get pageHeader() {
    return $("h1");
  }

  get rowsPerPage() {
    return $(".HvPagination-pageSizeOptionsSelect .HvBaseDropdown-header");
  }

  getRow(n:number) {
    return $(`div[role=rowgroup]>div:nth-child(${n})`);
  }

  get rowsSelected() {
    return $$("div[role=rowgroup]>div [aria-selected=true]");
  }

  get bulkActionCheckbox() {
    return $(".HvBulkActions-root input[type='checkbox']");
  }

  open() {
    return super.open("/templates/details");
  }
}

export default new DetailsPage();
