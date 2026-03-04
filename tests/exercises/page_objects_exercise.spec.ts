import { test } from "@playwright/test";
import { LoginPage } from "../../src/pages/login_page";
import { DashboardPage } from "../../src/pages/dashboard_page";

test("PageObjects Exercise - Login and Logout", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);
  await loginPage.open();
  await loginPage.login("pw_academy", "Playwright321!");
  await dashboardPage.clickProfile();
  await dashboardPage.clickLogout();
});
