// Purpose: Checks that the homepage loads and shows its main content.
import { expect, test } from '@playwright/test';

test('homepage loads', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle('Time Tapestry | Birthdays, History & Astronomy');
  await expect(page.getByRole('heading', { name: /Notable Events/ })).toBeVisible();
});
