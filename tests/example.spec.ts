import { test, expect } from "@playwright/test";

test("homepage has title and links to register page", async ({ page }) => {
  // Navigate to the homepage
  await page.goto("/");

  // Check the title
  await expect(page).toHaveTitle(/Vite \+ React \+ TS/);

  // Check if the "Register" link is visible
  const registerLink = page.locator("text=Register");
  await expect(registerLink).toBeVisible();

  // Click the "Register" link
  await registerLink.click();

  // Verify navigation to the Register page
  await expect(page).toHaveURL(/\/register/);
  await expect(page.locator("h5")).toHaveText("Welcome to the registration page!");
});
