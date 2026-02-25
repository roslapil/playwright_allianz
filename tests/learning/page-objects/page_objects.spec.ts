import { test } from "@playwright/test";
import { LoginPage } from "../../../src/pages/login_page";

test('Page Objects Test', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.fillUsername("pw_academy");
    await loginPage.fillPassword("Playwright321!");
    await loginPage.clickLogin();
})

test('Page Objects Grouped Method', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.login("pw_academy", "Playwright321!");
})

