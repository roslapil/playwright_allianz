import { test } from "@playwright/test";
import { LoginPage } from "../../../src/pages/login_page";

test("Tag Test", { tag: "@mujTag" }, async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.open();
});

test("Without Tag", async ({ page }) => {});

test.describe("Tagged Describe Test", { tag: "@mujTag" }, () => {
  test("Tagged Describe Test 1", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
  });

  test("Tagged Describe Test 2", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
  });
});

test.describe("Without Tag", () => {
  test("Not Tagged Describe", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
  });
});
