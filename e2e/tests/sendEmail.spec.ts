import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Anime Girl To Email/);
});

test("have description text", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  await expect(page.getByRole("paragraph")).toHaveText(
    "Enter your email to recieve an anime girl picture"
  );
});

test("should sent an email successfully", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  await page.route("http://localhost:4000/sendEmail", async (route) => {
    await route.fulfill({ status: 201 });
  });

  await page.getByPlaceholder("yourname@example.com").fill("weerawong.v@ku.th");
  await page.getByRole("button").click();

  await expect(
    page.getByText(
      "Successfully sent your email. Check your email to see the result."
    )
  ).toBeVisible();
});

test("should failed to sent an email", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  // mock the api response to return status 500 that should failed to sent an email
  await page.route("http://localhost:4000/sendEmail", async (route) => {
    await route.fulfill({ status: 500 });
  });

  await page.getByPlaceholder("yourname@example.com").fill("weerawong.v@ku.th");
  await page.getByRole("button").click();

  await expect(
    page.getByText("There was an error sending your email please try again.")
  ).toBeVisible();
});
