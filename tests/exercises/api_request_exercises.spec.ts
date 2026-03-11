import { test } from "@playwright/test";

test("GET Request", async ({ request }) => {
  await request.get("https://www.tredgate.cloud/courses");
});
