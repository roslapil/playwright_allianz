import { expect, Locator, Page } from "@playwright/test";
import { LoginPage } from "../login_page";

export class ProjectTasksPage {
  readonly page: Page;
  readonly profileButton: Locator;
  readonly logoutButton: Locator;
  readonly alertIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.profileButton = page.locator("#user_dropdown");
    this.logoutButton = page.locator("#logout");
    this.alertIcon = page.locator("#user_notifications_report");
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
}
