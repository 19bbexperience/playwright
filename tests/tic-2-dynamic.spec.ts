import { test, expect } from "@playwright/test";

test("should handle slow loading elements using explicit waits instead of hard sleeps", async ({
  page,
}) => {
  // Go to the live heroku loading sandbox
  await page.goto("https://herokuapp.com");

  const startButton = page.locator("#start button");
  const finishText = page.locator("#finish h4");

  // Verify the final text hidden out of sight initially
  await expect(finishText).not.toBeVisible();

  // Trigger the loading bar (takes roughly 5 seconds to finish)
  await startButton.click();

  // ❌ ANTI-PATTERN: This makes your tests flaky and slow. Do NOT use this.
  // await page.waitForTimeout(5000);

  // 1. TODO: Replace the hard sleep above by waiting explicitly for the element to appear.
  // Hint: Playwright auto-waits for visibility when you use expect().toBeVisible(),
  // but you must pass it a custom timeout override because the default is too short or close to the line.
  // YOUR CODE HERE: Adjust the assertion timeout to 8000ms to safely catch the element.
  await expect(finishText).toBeVisible({ timeout: 8000 });

  // 2. TODO: Assert that the text exactly equals 'Hello World!'
  // YOUR CODE HERE
  await expect(finishText).toHaveText("Hello World!");
});
