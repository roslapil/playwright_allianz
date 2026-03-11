import { test } from "@playwright/test";
import { faker } from "@faker-js/faker";

test("Exercise: Request with Body", async ({ request }) => {
  const username = faker.internet.username();
  const password = faker.internet.password();
  const email = faker.internet.exampleEmail();

  await request.post(
    "https://tegb-backend-877a0b063d29.herokuapp.com/eshop/register",
    {
      data: {
        username: username,
        password: password,
        email: email,
      },
    },
  );
});
