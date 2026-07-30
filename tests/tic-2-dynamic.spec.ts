import { test, expect } from "@playwright/test";

test("should handle slow loading elements using explicit waits instead of hard sleeps", async ({
  page,
}) => {
  await page.goto("https://the-internet.herokuapp.com/dynamic_loading/1", {
    waitUntil: "domcontentloaded",
    timeout: 30_000,
  });

  const startButton = page.locator("#start button");
  const finishText = page.locator("#finish h4");

  await expect(startButton).toBeVisible({ timeout: 15_000 });
  await expect(finishText).not.toBeVisible();

  await startButton.click();

  await expect(finishText).toBeVisible({ timeout: 15_000 });
  await expect(finishText).toHaveText("Hello World!");
});
