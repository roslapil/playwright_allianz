import { test } from "@playwright/test";
import { LoginPage } from "../../../src/pages/login_page";

test.describe("Test Suite (describe)", () => {
    let loginPage: LoginPage

test.beforeEach(async ({ page }) => {   // vyhodnocuje se před začátkem každého běhu PWBF
    loginPage = new LoginPage(page);  
    await loginPage.open();
})

  test("Pmtool Login", async () => {

    await loginPage
      .fillUsername("pw_academy")
      .then((login) => login.fillPassword("Playwright321!"))
      .then((login) => login.clickLogin());
  });

  test("Failed Login", async () => {

    await loginPage
      .fillUsername("pw_academy")
      .then((login) => login.fillPassword("Playwright"))
      .then((login) => login.clickLogin());
  });
});
