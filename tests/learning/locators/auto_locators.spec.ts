import { test } from "@playwright/test";

test('Automatic Locator Usage', async ({ page }) => {
    await page.goto("https://tredgate.com/pmtool");
    await page.locator("#username").fill("pw_academy");
    await page.locator('//input[@id="password"]').fill("Playwright321!");
})