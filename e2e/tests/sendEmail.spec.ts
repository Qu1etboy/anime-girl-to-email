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

test("sent email", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  await page.route("http://localhost:4000/sendEmail", async (route) => {
    const json = {
      message: { test_breed: [] },
    };
    await route.fulfill({ json });
  });

  await page.getByPlaceholder("yourname@example.com").fill("weerawong.v@ku.th");
  await page.getByRole("button").click();

  await expect(
    page.getByText(
      "Successfully sent your email. Check your email to see the result."
    )
  ).toBeVisible();
});
