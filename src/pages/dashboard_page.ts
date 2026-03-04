import { expect, Locator, Page, test } from "@playwright/test";
import { LoginPage } from "./login_page";

export class DashboardPage {
  readonly page: Page;
  readonly profileButton: Locator;
  readonly logoutButton: Locator;
  readonly alertIcon: Locator;
  readonly projectsButton: Locator;
  readonly addProjectsButton: Locator;
  readonly appNameAnchor: Locator;

  constructor(page: Page) {
    this.page = page;
    this.profileButton = page.locator("#user_dropdown");
    this.logoutButton = page.locator("#logout");
    this.alertIcon = page.locator("#user_notifications_report");
    this.projectsButton = page.locator("Projects");
    this.addProjectsButton = page.locator('[test_id="Add Project"]');
    this.appNameAnchor = page.locator(".navbar-brand");
  }

  async clickProfile() {
    await expect(this.alertIcon).toBeVisible(); // Počká na zobrazení elementu, pak pokračuje v testech
    await this.profileButton.click();
    return this;
  }

  async clickLogout() {
    await this.logoutButton.click();
    return new LoginPage(this.page);
  }

  async logout() {
    await this.clickProfile();
    await this.clickLogout();
    return await this.clickLogout();
  }

  async assertDashboard(appName: string) {
    await test.step("Dashboard Asserts", async () => {
      await expect(
        this.profileButton,
        "Profile Button is Visible",
      ).toBeVisible();
      await expect(this.appNameAnchor, "App Name has Text").toHaveText(appName);
    });
  }
}
