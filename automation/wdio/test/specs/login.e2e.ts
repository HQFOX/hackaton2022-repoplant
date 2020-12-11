import LoginPage from "../pageobjects/login.page";
import OverviewPage from "../pageobjects/overview.page";

describe("My Login application", () => {
  it("should login with valid credentials", () => {
    LoginPage.open();

    // browser.takeSnapshot("Login page");

    LoginPage.login("admin", "password");

    expect(OverviewPage.pageHeader).toBeExisting();
    expect(OverviewPage.pageHeader).toHaveTextContaining("Overview");
  });
});
