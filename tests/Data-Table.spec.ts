import { test, expect } from "@playwright/test";

test("should find a user row by text and assert data in adjacent column cell", async ({
  page,}) => {await page.goto("https://heroku.com");

  // 1. TODO: Target Table 1 element specifically using its id locator (#table1)
  // 2. TODO: Use Playwright's locator combination logic to find a table row (.row or tr)
  // that contains the specific text string: 'fbach@yahoo.com'
  // Hint: page.locator('table#table1 tr').filter({ hasText: 'fbach@yahoo.com' })
  const userRow = page.locator("table#table1 tr").filter({ hasText: "fbach@yahoo.com" });

  // 3. TODO: From that filtered row element, extract the value of the balance cell ($51.00)
  // and assert it matches expectations.
  const balanceCell = userRow.locator("td").nth(3) // Assuming the balance is in the 3rd column (index 2)

  //Assert that the text matches the expected value of $51.00
  await expect(balanceCell).toHaveText("$51.00");
});
