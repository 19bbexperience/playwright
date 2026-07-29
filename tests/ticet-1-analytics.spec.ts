import { test, expect } from "@playwright/test";

test("should handle analytics failure gracefully", async ({ page }) => {
  // FIX: Intercept the API call BEFORE navigating so Playwright can catch it
  await page.route("**/api/v1/tracker", (route) => {
    // This syntax is wrong and causes a compilation error
    route.fulfill({ status: 500 });
  });

  //FIX: Use route.fulfill to simulate an HTTP 500 error status code error
  await page.goto("https://example.com");

  // Verify that an error banner appears instead of a blank page crash
  const errorBanner = page.locator("#error-banner");
  await expect(errorBanner).toBeVisible();
  await expect(errorBanner).toHaveText(
    "Analytics offline, but you are good to go!",
  );
});
